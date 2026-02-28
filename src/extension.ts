import * as vscode from 'vscode';

interface Finding {
    line: number;
    message: string;
}

function analyze(document: vscode.TextDocument): Finding[] {
    const findings: Finding[] = [];
    const lines = document.getText().split('\n');

    lines.forEach((line, index) => {

        // SQL Injection
        if (/SELECT.*\+.*req\.body/i.test(line)) {
            findings.push({
                line: index,
                message: "Possible SQL Injection (OWASP A03 Injection)"
            });
        }

        // XSS
        if (/innerHTML\s*=\s*req\.body/i.test(line)) {
            findings.push({
                line: index,
                message: "Possible XSS (OWASP A03 Injection)"
            });
        }

    });

    return findings;
}

export function activate(context: vscode.ExtensionContext) {

    const command = vscode.commands.registerCommand(
        'owasp-risk-intelligence.scan',
        () => {

            const editor = vscode.window.activeTextEditor;
            if (!editor) {
    		return;
			}

            const findings = analyze(editor.document);

            if (findings.length === 0) {
                vscode.window.showInformationMessage("No OWASP risks detected.");
                return;
            }

            const decorationType = vscode.window.createTextEditorDecorationType({
                backgroundColor: 'rgba(255, 0, 0, 0.4)'
            });

            const decorations: vscode.DecorationOptions[] = findings.map(f => {
                const line = editor.document.lineAt(f.line);
                return {
                    range: line.range,
                    hoverMessage: f.message
                };
            });

            editor.setDecorations(decorationType, decorations);

            vscode.window.showWarningMessage(
                `Detected ${findings.length} OWASP risk(s)`
            );
        }
    );

    context.subscriptions.push(command);
}

export function deactivate() {}