import { setupEnv } from "./config/dotenv";
import { specAgent } from "./my-first-agent/spec-agent";

async function main(){
    setupEnv();
    const args = process.argv.slice(2); //Remove o 'node' e o nome do script
    
    if (args.length < 1) {
        console.error("Uso: node main.ts <prompt> [numero]");
        process.exit(1);
    }
    
    const prompt = args[0];
    let numero: number | undefined;
    
    if (args.length >= 2) {
        const parsed = parseInt(args[1], 10);
        if (isNaN(parsed)) {
            console.error("O segundo parâmetro deve ser um número inteiro.");
            process.exit(1);
        }
        numero = parsed;
    }
    
    specAgent(prompt, numero);
}

main();