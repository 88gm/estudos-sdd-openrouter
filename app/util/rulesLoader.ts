import * as fs from "fs";
import * as path from "path";

/**
 * Load all .rule files from the rules directory and concatenate them into a single string.
 * Files are loaded in alphabetical order (useful for 001, 002, etc. naming conventions).
 * @returns A formatted string containing all rules or empty string if no rules found/error.
 */
export async function loadAllRules(): Promise<string> {
    const rulesPath = path.join(process.cwd(), ".agents", "rules");
    let rulesContent = "";

    try {
        /* if (!fs.existsSync(rulesPath)) {
            console.warn(`Rules directory not found: ${rulesPath}`);
            return rulesContent;
        } */

        const files = fs.readdirSync(rulesPath);
        const ruleFiles = files.filter(file => file.endsWith('.rule'));

        if (ruleFiles.length === 0) {
            console.warn(`No .rule files found in: ${rulesPath}`);
            return rulesContent;
        }

        ruleFiles.sort(); // Ordenar alfabèticamente para carregar na ordem correta (001, 002, etc)

        for (const file of ruleFiles) {
            const filePath = path.join(rulesPath, file);
            const content = fs.readFileSync(filePath, "utf-8");
            rulesContent += `\n\n--- RULE: ${file} ---\n${content}`;
        }

        rulesContent = `\n=== AGENT RULES ===\n${rulesContent}\n=== END OF RULES ===\n`;
    } catch (error) {
        console.error("Error loading rules:", error);
    }

    return rulesContent;
}
