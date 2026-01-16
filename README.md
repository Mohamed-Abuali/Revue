# Revue

**Revue** is a powerful, extensible static code analysis tool designed to help developers maintain high code quality standards. Built with modern web technologies, it provides a sleek interface for scanning projects, identifying issues, and enforcing custom coding rules.

![Revue Dashboard](public/videos/Revue.mp4)

## 🚀 Features

-   **Custom Rule Engine**: Define your own linting rules using a simple JSON configuration.
-   **AST-Based Analysis**: Uses `@babel/parser` and `@babel/traverse` for deep, accurate code understanding.
-   **Multi-Project Support**: Scan any local project by simply providing its file path.
-   **Real-time Reporting**: Instant feedback on code errors, warnings, and informational notices.
-   **Interactive Dashboard**: Filter, sort, and manage issues through a modern, responsive UI.
-   **Tech Stack**: Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript.

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18+ installed
-   npm, pnpm, or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Mohamed-Abuali/Revue.git
    cd revue
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

1.  **Launch Revue**: Open the application in your browser.
2.  **Enter Project Path**: In the sidebar, paste the absolute path to the project you want to scan (e.g., `C:/Users/Dev/MyProject`).
3.  **Run Scan**: Click the "Scan Project" button.
4.  **Review Issues**: Browse the list of detected issues. You can:
    -   Filter by severity (Critical, Warning, Info).
    -   Sort by file name or line number.
    -   Click on an issue to see details.

## ⚙️ Configuration

Revue uses a `lib/rules.json` file to define analysis rules. You can extend this file to add custom checks for your specific needs.

Example Rule:
```json
{
  "ruleName": "No Inline Styles",
  "severity": "warning",
  "attributeNames": ["style"],
  "expressionType": "ObjectExpression",
  "message": "Avoid using inline styles. Use Tailwind classes instead."
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.