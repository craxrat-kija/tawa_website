import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DestinationsList from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import AboutTawa from "./pages/AboutTawa";
import ZonePage from "./pages/ZonePage";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Tourism from "./pages/Tourism";
import Investments from "./pages/Investments";
import Publications from "./pages/Publications";
import Conservation from "./pages/Conservation";

import ScrollToTopWrapper from "./components/ScrollToTopWrapper";
import Chatbot from "./components/Chatbot";
import QuickAccessSidebar from "./components/QuickAccessSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTopWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<DestinationsList />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/about" element={<AboutTawa />} />
            <Route path="/about/zones/:zoneId" element={<ZonePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/conservation" element={<Conservation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTopWrapper>
        <QuickAccessSidebar />
        <Chatbot />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
