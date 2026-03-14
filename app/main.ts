import { setupEnv } from "./config/dotenv";
import { sdkWithTools } from "./testes-ai-sdk-provider/app_sdk_with_tools";

async function main(){
    setupEnv();
    const prompt = process.argv.slice(2).join(" ");
    
    sdkWithTools(prompt);
}

main();