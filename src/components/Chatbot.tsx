import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Command, Search, Globe, Shield, HelpCircle, Loader2 } from 'lucide-react';
import chatbotKnowledge from '../data/chatbot-knowledge.json';
import { destinations } from '../data/destinations';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Initialize AI Engines (User can provide keys in .env)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

// Log API key status
if (typeof window !== 'undefined') {
    if (GEMINI_API_KEY) {
        console.log('✅ Gemini API Key loaded:', GEMINI_API_KEY.substring(0, 20) + '...');
    } else {
        console.warn('⚠️  No Gemini API Key found. Chatbot will use offline mode.');
    }
}

// Track if API has failed to prevent repeated attempts
let apiHasFailed = false;

interface Message {
    role: 'user' | 'assistant';
    content: string;
    isExternal?: boolean;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hello! I'm your TAWA Assistant. Ask me anything about Tanzania's wildlife, game reserves, and our conservation efforts."
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const info = chatbotKnowledge.system_info;

    const generateResponse = async (query: string): Promise<Message> => {
        const q = query.toLowerCase();

        // 1. Basic Greetings
        if (q.includes('hello') || q.includes('hi ') || q === 'hi' || q.includes('hey')) {
            return { role: 'assistant', content: "Jambo! Hello! How can I assist you with TAWA's wildlife information today?" };
        }
        if (q.includes('who are you')) {
            return { role: 'assistant', content: "I am **TAWA AI**, the official virtual assistant for the Tanzania Wildlife Management Authority. I am here to help you explore our 13 pristine game reserves and our conservation mission." };
        }

        // 2. Mission/Vision
        if (q.includes('mission') || q.includes('goal')) {
            return { role: 'assistant', content: `TAWA's mission is to: *"${info.mission}"*` };
        }
        if (q.includes('vision') || q.includes('future')) {
            return { role: 'assistant', content: `TAWA's vision is: *"${info.vision}"*` };
        }

        // 3. Stats
        if (q.includes('how many') || q.includes('size') || q.includes('area') || q.includes('stat')) {
            return { role: 'assistant', content: `TAWA scale is massive: \n\n- **Managed Area:** ${info.statistics.total_area} \n- **Annual Visitors:** ${info.statistics.annual_visitors} \n- **Wildlife Species:** ${info.statistics.wildlife_species} \n- **Game Reserves:** ${info.statistics.game_reserves_count} major reserves.` };
        }

        // 4. Game Reserves & Destination Data Search
        const matchedDest = destinations.find(d => q.includes(d.name.toLowerCase()) || d.id.toLowerCase().includes(q));
        if (matchedDest) {
            return { role: 'assistant', content: `**${matchedDest.name}** covers ${matchedDest.area}. \n\n${matchedDest.description} \n\n**Highlights:** ${matchedDest.highlight}. \n**Activities:** ${matchedDest.attractions.join(', ')}.` };
        }
        if (q.includes('reserve') || q.includes('park') || q.includes('where')) {
            return { role: 'assistant', content: `TAWA manages over **13 Game Reserves** across Tanzania, covering ${info.statistics.total_area}. Major ones include **Selous**, **Maswa**, and **Grumeti**. Which one would you like to explore?` };
        }

        // 5. Contact
        if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('address') || q.includes('reach')) {
            return { role: 'assistant', content: `🏢 **Address:** ${info.contact.address} \n📞 **Phone:** ${info.contact.phone} \n📧 **Email:** ${info.contact.email} \n🌐 **Website:** [www.tawa.go.tz](https://www.tawa.go.tz)` };
        }

        // 6. Services
        if (q.includes('service') || q.includes('portal') || q.includes('permit') || q.includes('invest')) {
            const list = info.services.map(s => `\n- **${s.name}**: ${s.detail}`).join('');
            return { role: 'assistant', content: `TAWA provides the following services and professional opportunities:${list}` };
        }

        // 7. News / 2026 Simulation
        if (q.includes('latest') || q.includes('news')) {
            return { role: 'assistant', content: "Our 2026 activity logs show increased anti-poaching success in Selous and a major equipment handover to Serengeti districts. We are also celebrating World Wildlife Day in Arusha with new community outreach programs." };
        }

        // --- 8. DYNAMIC EXTERNAL FETCH (SKIPPED IF API FAILED) ---
        if (genAI && !apiHasFailed) {
            setIsSearching(true);
            try {
                const context = `You are the official TAWA Assistant. 
                Context about TAWA: ${JSON.stringify(info)}. 
                Destinations info: ${JSON.stringify(destinations)}.
                IMPORTANT: First, base your answer on the provided context above (the site data).
                Then, enrich and add some additional factual information from your external knowledge to provide a more comprehensive answer.
                If the answer is NOT available in the context, then you may rely entirely on your external knowledge to answer. 
                If the query is unrelated to TAWA, answer as a helpful AI assistant.
                Format responses in clean Markdown.`;

                let result;
                try {
                    console.log('🔄 Attempting gemini-1.5-flash...');
                    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                    result = await model.generateContent(context + "\n\nUser Query: " + query);
                    console.log('✅ gemini-1.5-flash succeeded');
                } catch (fallbackError) {
                    console.warn("gemini-1.5-flash failed, trying gemini-1.5-pro...");
                    try {
                        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
                        result = await model.generateContent(context + "\n\nUser Query: " + query);
                        console.log('✅ gemini-1.5-pro succeeded');
                    } catch (secondFallback) {
                        console.warn("gemini-1.5-pro failed, trying gemini-2.0-flash...");
                        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
                        result = await model.generateContent(context + "\n\nUser Query: " + query);
                        console.log('✅ gemini-2.0-flash succeeded');
                    }
                }

                const response = await result.response;
                const text = response.text();

                setIsSearching(false);
                return { role: 'assistant', content: text || "I was unable to find an answer for that.", isExternal: true };
            } catch (error) {
                console.error("Gemini SDK Error:", error);
                setIsSearching(false);

                // Mark API as failed to prevent further attempts
                apiHasFailed = true;

                let errorMessage = "I'm having trouble with my AI brain right now. Let me help you with knowledge from my local database instead.\n\nI can tell you about TAWA, our reserves, statistics, and more!";
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const err = error as any;
                if (err?.status === 403 || err?.message?.includes("leaked") || String(error).includes("403")) {
                    errorMessage = "⚠️ **API Error:** The Gemini API key appears to be invalid or has been flagged. I'm switching to offline mode. I can still help you with destination info and TAWA details!";
                } else if (String(error).includes("404") || String(error).includes("not found")) {
                    errorMessage = "⚠️ **Model Error:** The AI models aren't available right now. Switching to offline mode. Ask me about our reserves, mission, or contact info!";
                }

                return { role: 'assistant', content: errorMessage };
            }
        }

        // 9. Default Fallback (Offline Mode or No API Key)
        return { role: 'assistant', content: "I'm running in **Offline Mode**. I can still help you with:\n\n✓ Game reserve information\n✓ TAWA statistics and mission\n✓ Contact information\n✓ Services overview\n\nTry asking: *'Tell me about Selous'*, *'What is TAWA's mission?'*, or *'Contact information'*" };
    };

    const handleSend = async (text?: string) => {
        const queryText = text || input;
        if (!queryText.trim()) return;

        const userMsg: Message = { role: 'user', content: queryText };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        const responseMsg = await generateResponse(queryText);
        setMessages(prev => [...prev, responseMsg]);
        setIsTyping(false);
    };

    const QuickActions = () => (
        <div className="flex flex-wrap gap-2 mt-4">
            {['Reserve Info', 'Mission', 'Contact', 'Latest News'].map((action) => (
                <button
                    key={action}
                    onClick={() => handleSend(action)}
                    className="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-primary/20 bg-muted hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all text-muted-foreground"
                >
                    {action}
                </button>
            ))}
        </div>
    );

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
                        className="mb-4 bg-background/80 backdrop-blur-2xl border border-white/20 rounded-[32px] shadow-[0_32px_128px_rgba(0,0,0,0.3)] w-[380px] max-w-[90vw] h-[580px] overflow-hidden flex flex-col ring-1 ring-white/10"
                    >
                        {/* Header */}
                        <div className="p-6 bg-primary text-primary-foreground flex items-center justify-between shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md relative">
                                    <Command className="w-6 h-6" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-primary rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-black uppercase tracking-tight text-lg">TAWA Assistant</h3>
                                    <div className="flex items-center gap-1.5 opacity-80">
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Digital Help Desk Active</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform bg-white/10 p-2 rounded-full backdrop-blur-md">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-muted/80 backdrop-blur-sm border border-border/50 text-foreground rounded-tl-none'}`}>
                                        <div className={`text-sm leading-relaxed prose prose-sm max-w-none 
                                            ${message.role === 'user'
                                                ? 'prose-invert prose-p:text-primary-foreground prose-headings:text-primary-foreground prose-strong:text-primary-foreground'
                                                : 'dark:prose-invert prose-p:text-foreground prose-headings:text-foreground prose-strong:text-foreground'}`}>
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {message.content}
                                            </ReactMarkdown>
                                        </div>
                                        {message.isExternal && (
                                            <div className="mt-2 flex items-center gap-1 opacity-40 text-[8px] uppercase font-bold text-primary italic border-t border-primary/10 pt-1">
                                                <Globe className="w-2.5 h-2.5" /> Verified by Global AI
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isSearching && (
                                <div className="flex justify-start">
                                    <div className="bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/10 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="w-3 h-3 text-primary animate-spin" />
                                            <span className="text-[10px] uppercase font-black tracking-widest text-primary italic animate-pulse">Searching Sources...</span>
                                        </div>
                                        <div className="h-1 w-32 bg-primary/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
                                                animate={{ x: [-100, 100] }}
                                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isTyping && !isSearching && (
                                <div className="flex justify-start">
                                    <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-100" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            {messages.length < 3 && <QuickActions />}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-muted/30 border-t border-border/50 backdrop-blur-md">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask anything about TAWA..."
                                    className="w-full bg-background border border-border p-4 pr-14 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim()}
                                    className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-[0_12px_48px_-8px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden group border-2 border-white/20"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                {isOpen ? <X className="w-8 h-8 relative z-10" /> : <MessageCircle className="w-8 h-8 relative z-10" />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
