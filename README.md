🧠 ArkLab AI Agent Catalog
A modern web app to explore AI agents — built with Next.js, TypeScript, Redux, and Tailwind CSS, with Google OAuth login.

🚀 Features
🔍 Search & filter AI agents

🔐 Google OAuth login (via next-auth)

⚡ SSR with Next.js 14 (App Router)

💾 Redux Toolkit for global state

🎨 Responsive UI with Tailwind + Framer Motion

🛠 Tech Stack
Next.js 14

TypeScript

Redux Toolkit

Tailwind CSS

NextAuth (Google Login)

Framer Motion

📦 Setup
bash
Copy
Edit
git clone https://github.com/RI_Tanvir/ArkLab-AI-Agent-Catalog.git
cd ArkLab-AI-Agent-Catalog
npm install

cp .env.local.example .env.local


npm run dev
🔐 Google OAuth
Set these in .env.local:

env
Copy
Edit
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
📂 Structure
csharp
Copy
Edit
app/        # App Router pages
components/ # UI components
redux/      # Store + slices
public/     # Static data (mock-agents.json)
