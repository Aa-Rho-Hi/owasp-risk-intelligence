
# 🔐 OWASP Risk Intelligence for VS Code

OWASP Risk Intelligence is a lightweight static analysis extension for Visual Studio Code that detects common OWASP Top 10 vulnerabilities directly inside your editor and calculates contextual risk scores.

This tool helps developers identify insecure coding patterns early in the Secure Software Development Lifecycle (SSDLC).

---

## 🚨 Supported Vulnerability Detection

The extension currently detects:

### 🔴 Injection Risks (OWASP A03:2021 – Injection)
- SQL Injection
- Cross-Site Scripting (XSS)
- Command Injection
- Use of `eval()`

### 🟠 Cryptographic Failures (OWASP A02:2021)
- Weak hash usage (MD5 / SHA1)
- Insecure randomness (`Math.random()`)

### 🔴 Identification & Authentication Failures (OWASP A07:2021)
- Hardcoded secrets

### 🟡 Insecure Configuration
- Use of HTTP instead of HTTPS

---

## 📊 Risk Scoring Model

Each detected issue includes:

- **Severity Level** (High / Medium / Low)
- **Exploitability Score (0–10)**
- **Impact Score (0–10)**
- **Calculated Risk Score (0–10)**

### Risk Formula

Risk Score = (Exploitability × 0.6) + (Impact × 0.4)


The extension also calculates:

- 📈 Average file risk score
- 📌 Total number of vulnerabilities detected

---

## 🧪 Example Vulnerable Code

```js
const query = "SELECT * FROM users WHERE id = " + req.body.id;
document.innerHTML = req.body.comment;
const api_key = "SECRET-123";
exec("rm -rf " + req.body.file);
````

Detected as:

* SQL Injection
* XSS
* Hardcoded Secret
* Command Injection

Each line is highlighted inline with a detailed hover explanation.

---

## ✅ Secure Code Example

```js
const query = "SELECT * FROM users WHERE id = ?";
db.execute(query, [req.body.id]);

const div = document.createElement("div");
div.textContent = userInput;

const apiKey = process.env.API_KEY;
```

No vulnerabilities detected.

---

## ⚙️ Features

* Inline vulnerability highlighting
* Hover-based risk explanation
* Context-aware risk scoring
* Average file risk summary
* Lightweight static analysis
* TypeScript-based VS Code extension

---

## 🛠 Installation (Development Mode)

```bash
git clone https://github.com/Aa-Rho-Hi/owasp-risk-intelligence.git
cd owasp-risk-intelligence
npm install
npm run compile
```

Open the project in VS Code and press:

```
F5
```

Launch the Extension Development Host.

Then run:

```
Scan for OWASP Risks
```

from the Command Palette.

---

## 🏗 Technical Architecture

* TypeScript
* VS Code Extension API
* Regex-based static analysis engine
* Risk scoring engine
* Inline decoration API
* esbuild bundler

---

## 🚀 Roadmap

Planned future enhancements:

* AST-based static analysis
* Data-flow (source → sink) detection
* CVSS-style scoring model
* Sidebar risk dashboard
* GitHub Pull Request integration
* JSON security report export
* Auto-fix recommendations

---

## 🎯 Purpose

This project demonstrates:

* OWASP Top 10 awareness
* Secure SDLC integration
* Static code analysis fundamentals
* Risk-based vulnerability prioritization
* Security tooling development

---

## 👩‍💻 Author

Aarohi
Cybersecurity & Risk enthusiast
