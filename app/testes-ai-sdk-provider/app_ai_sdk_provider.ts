import "dotenv/config";

export async function testeAiSdkProvider() {
        console.log("Inicializando");
        const prompt = "Hello, how are you?";

        console.log("API Key:", process.env.OPENROUTER_API_KEY ? "Presente" : "Ausente");
        console.log("Model:", process.env.OPENROUTER_MODEL || "Não definido");

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions",{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: process.env.OPENROUTER_MODEL,
                messages: [
                    { role: "user", content: prompt}
                ]
            })
        })

        console.log("Status da resposta:", response.status);

        if(!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenRouter error: ${response.status} - ${errorText}`);
        }

        const output = await response.json();
        console.log(JSON.stringify(output, undefined, " "));
}