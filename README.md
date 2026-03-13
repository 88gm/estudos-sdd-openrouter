# Estudos SDD OpenRouter

## Project Description
Estudos SDD OpenRouter is a project aimed at studying Software Design and Development patterns through practical implementation of an open-source router system.

## Features
- Modular architecture
- Extensible routing protocols
- User-friendly interface
- Real-time performance monitoring

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/88gm/estudos-sdd-openrouter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd estudos-sdd-openrouter
   ```
3. Install BUN:
   BUN is a modern JavaScript runtime and package manager. To install it, follow the instructions below:
   - **Linux/macOS:**
     ```bash
     curl -fsSL https://bun.sh/install | bash
     ```
   - **Windows:**
     ```bash
     powershell -c "irm bun.sh/install.ps1 | iex"
     ```
   - **Homebrew (macOS):**
     ```bash
     brew install bun
     ```
   After installation, verify it by running:
   ```bash
   bun --version
   ```
4. Install dependencies:
   ```bash
   bun install
   ```

## Usage
On main.ts, select the function that you want to test, and run:
```bash
bun main.ts
```

## Project Structure
```
estudos-sdd-openrouter/
├── src/                 # Source files
│   ├── components/      # React components
│   ├── services/        # API services
│   └── utils/           # Utility functions
├── public/              # Public files
└── README.md            # Project documentation
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.