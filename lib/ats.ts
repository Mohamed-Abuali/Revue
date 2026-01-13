import { globSync } from "glob"
import { parse } from "@babel/parser"
import path from "path"
import { readFileSync, writeFileSync } from "fs"

// @ts-expect-ignore
import traverse from "@babel/traverse";

export type Issue = {
    rule: string;
    message: string;
    file: string;
    line: number;
    level: string;
    category: string;
}

type TypeAST = ReturnType<typeof parseToAST>

export function scanProject(targetPath: string) {
    const issues: Issue[] = []
    
    // Load rules relative to the Revue project root, not the target project
    const rulesPath = path.join(process.cwd(), "lib/rules.json");
    let Rules: any[] = [];
    try {
        Rules = JSON.parse(readFileSync(rulesPath, "utf-8")).rules
    } catch (error) {
        console.error("Could not load rules.json", error);
        return [];
    }

    // Find files in the target path
    const files = globSync("**/*.{js,jsx,ts,tsx}", {
        cwd: targetPath,
        ignore: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/build/**"]
    })

    for (const file of files) {
        try {
            const filePath = path.join(targetPath, file)
            const code = readFileSync(filePath, "utf-8")
            const ast = parseToAST(code)
            analysisCode(ast, file, Rules, issues)
        } catch (error) {
            console.error(`Error parsing file: ${file}`, error);
        }
    }

    return issues;
}

function parseToAST(code: string) {
    const ast = parse(code, {
        sourceType: "module",
        plugins: ["typescript", "jsx"],
        errorRecovery: true,
    })
    return ast;
}

function analysisCode(ast: TypeAST, file: string, rules: any[], issues: Issue[]) {
    traverse(ast, {
        JSXAttribute(path: any) {
            for (const rule of rules) {
                const attrName = path.node.name?.name;
                if (!attrName) continue;

                if (rule["attributeNames"].includes(attrName) && path.node.value?.expression?.type === rule["expressionType"]) {
                    issues.push({
                        rule: rule["ruleName"],
                        message: rule["message"],
                        file,
                        line: path.node.loc?.start.line ?? 0,
                        level: rule["severity"],
                        category: rule["category"]
                    })
                }
            }

        }
    })
}