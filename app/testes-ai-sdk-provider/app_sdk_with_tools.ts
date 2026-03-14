import "dotenv/config";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText, stepCountIs } from "ai";
import { initLogFile, logStep } from "../util/logger";
import { tools } from "../tools";

export async function sdkWithTools(prompt:string) {
    initLogFile();
    
    const systemPrompt = "";
    const openRouterClient = createOpenRouter({
        apiKey: process.env.OPENROUTER_API_KEY,
    })
    
    const model = getSelectedModel();

    const { text } = await generateText({
        model: openRouterClient(model),
        system: systemPrompt,
        prompt,
        stopWhen: stepCountIs(5),
        tools,
        onStepFinish: logStep
    });
    console.log(text);
}

function getSelectedModel(): string{
    if(!process.env.OPENROUTER_MODEL){
        throw new Error("OPENROUTER_MODEL not set in .env");
    }

    return process.env.OPENROUTER_MODEL;
}