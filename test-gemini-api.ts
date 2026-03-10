import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Gemini API Integration Test
 * Tests the VITE_GEMINI_API_KEY to ensure it works correctly
 */

const GEMINI_API_KEY = "AIzaSyA6L002MJXniaXu4j93jtDiy8NXhoa3FEk";

if (!GEMINI_API_KEY) {
    console.error("❌ No Gemini API Key found");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// List of available models to test
const MODELS_TO_TEST = [
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-2.0-flash",
];

async function testModel(modelName: string) {
    try {
        console.log(`\n🔍 Testing model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        
        const response = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: "Say 'Model working!' in one sentence",
                        },
                    ],
                },
            ],
        });

        const text = response.response.text();
        console.log(`✅ ${modelName} - SUCCESS`);
        console.log(`   Response: ${text.substring(0, 50)}...`);
        return true;
    } catch (error: any) {
        console.log(`❌ ${modelName} - FAILED`);
        console.log(`   Error: ${error?.message || String(error)}`);
        return false;
    }
}

async function testGeminiIntegration() {
    console.log("╔════════════════════════════════════════════╗");
    console.log("║   Gemini API Integration Test              ║");
    console.log("╚════════════════════════════════════════════╝");
    
    console.log("\n📋 Testing with API Key:");
    console.log(`   ${GEMINI_API_KEY.substring(0, 20)}...${GEMINI_API_KEY.substring(-10)}`);

    const results: { [key: string]: boolean } = {};

    for (const model of MODELS_TO_TEST) {
        results[model] = await testModel(model);
    }

    console.log("\n╔════════════════════════════════════════════╗");
    console.log("║   RESULTS SUMMARY                          ║");
    console.log("╚════════════════════════════════════════════╝");

    const successful = Object.entries(results)
        .filter(([, success]) => success)
        .map(([model]) => model);

    const failed = Object.entries(results)
        .filter(([, success]) => !success)
        .map(([model]) => model);

    if (successful.length > 0) {
        console.log("\n✅ Working Models:");
        successful.forEach(model => {
            console.log(`   • ${model}`);
        });
    }

    if (failed.length > 0) {
        console.log("\n❌ Failed Models:");
        failed.forEach(model => {
            console.log(`   • ${model}`);
        });
    }

    console.log("\n📝 Recommendation:");
    if (successful.length > 0) {
        console.log(`   Use '${successful[0]}' as primary model`);
        if (successful.length > 1) {
            console.log(`   Fallback to '${successful[1]}'`);
        }
    } else {
        console.log("   ⚠️  No models working. Check your API key validity.");
    }

    console.log("\n═════════════════════════════════════════════\n");
}

// Run the test
testGeminiIntegration().catch(console.error);
