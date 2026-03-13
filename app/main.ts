import { setupEnv } from "./config/dotenv";
import { promptViaFetch } from "./testes-fetch/app_prompt_via_fetch_openrouter";

async function main(){
    setupEnv();
    promptViaFetch("Ping");
}

main();