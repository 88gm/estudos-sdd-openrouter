import { setupEnv } from "./config/dotenv";
import { specAgent } from "./my-first-agent/spec-agent";

async function main(){
    setupEnv();
    const args = process.argv.slice(2); //Remove 'node' and the script name
    
    if (args.length < 1) {
        console.error("Usage: node main.ts <prompt> [number]");
        process.exit(1);
    }
    
    const prompt = args[0];
    let number: number | undefined;
    
    if (args.length >= 2) {
        const parsed = parseInt(args[1], 10);
        if (isNaN(parsed)) {
            console.error("The second parameter must be an integer.");
            process.exit(1);
        }
        number = parsed;
    }
    
    specAgent(prompt, number);
}

main();