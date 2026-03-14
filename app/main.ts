import { setupEnv } from "./config/dotenv";
import { aiSdkProvider } from "./testes-ai-sdk-provider/app_ai_sdk_provider";

async function main(){
    setupEnv();
    aiSdkProvider("Testando SDK");
}

main();