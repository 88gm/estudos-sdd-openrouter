import "dotenv/config";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText, stepCountIs } from "ai";
import { initLogFile, logStep } from "../util/logger";
import { loadAllRules } from "../util/rulesLoader";
import { tools } from "../tools";

export async function specAgent(prompt:string, stepLimit?: number) {
    initLogFile();
    
    const systemPrompt = await loadAllRules();
    
    const openRouterClient = createOpenRouter({
        apiKey: process.env.OPENROUTER_API_KEY,
    })
    
    const model = getSelectedModel();

    const stopWhen = stepLimit !== undefined ? stepCountIs(stepLimit) : stepCountIs(500);

    const { text } = await generateText({
        model: openRouterClient(model),
        system: systemPrompt,
        prompt,
        stopWhen,
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