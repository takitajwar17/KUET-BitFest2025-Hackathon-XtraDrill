# অক্ষর (Okkhor)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai)](https://openai.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)

<br />

<img src="public/okkhor-logo.png" alt="অক্ষর Logo" width="150"/>

### 🎯 AI-Powered Bengali Learning Platform

[Demo](https://okkhor.vercel.app) · [Report Bug](https://github.com/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill/issues) · [Request Feature](https://github.com/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill/issues)

![GitHub contributors](https://img.shields.io/github/contributors/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)
![GitHub stars](https://img.shields.io/github/stars/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)
![GitHub forks](https://img.shields.io/github/forks/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)
![GitHub issues](https://img.shields.io/github/issues/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)
![GitHub license](https://img.shields.io/github/license/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)

</div>

## 🌟 Overview

**অক্ষর (Okkhor)** is a revolutionary AI-powered learning platform developed by Team XtraDrill that bridges the gap in Bengali language education. By combining cutting-edge AI technologies with interactive learning experiences, we're making education more accessible and engaging for Bengali speakers worldwide.

## ✨ Key Features

### 🤖 AI-Powered Learning
- **Intelligent Bengali Chat**: Advanced natural language processing system that understands and responds in Bengali script (বাংলা). Features smart handling of technical terms, maintaining English for technical concepts while seamlessly integrating Bengali text. Perfect for technical discussions in Bengali.

- **Voice Recognition**: State-of-the-art speech recognition system optimized for Bengali pronunciation. Supports both Bengali and English speech input, with real-time transcription and response generation. Includes voice feedback for pronunciation correction.

- **Adaptive Learning**: Personalized learning paths powered by AI that adjust to your proficiency level. The system tracks your progress, identifies areas for improvement, and dynamically adjusts content difficulty. Features spaced repetition for optimal retention.

- **Real-time Translation**: Context-aware translation system that maintains the nuance of technical and cultural terms. Intelligently preserves English technical terms while translating surrounding context to Bengali, ensuring accurate technical communication.

### 🎨 Interactive Tools
- **Interactive Canvas**: Real-time collaborative digital whiteboard with Bengali text support. Features:
  - Multi-user real-time editing
  - Smart shape recognition
  - Bengali text input optimization
  - Export to multiple formats
  - Version history tracking
  - Automatic layout suggestions

- **Story Creation**: AI-assisted creative writing platform with:
  - Bengali grammar and style suggestions
  - Plot development assistance
  - Character development tools
  - Genre-specific templates
  - Collaborative writing features
  - Export to multiple formats

- **Live Collaboration**: Real-time group learning environment powered by Pusher:
  - Instant message synchronization
  - Real-time cursor tracking
  - Shared workspaces
  - Live voice and text chat
  - Session recording and playback
  - Breakout room support

- **Progress Tracking**: Comprehensive analytics dashboard featuring:
  - Learning pace analysis
  - Proficiency metrics
  - Custom goal setting
  - Achievement badges
  - Progress visualization
  - Performance insights

### 🔐 User Experience
- **Secure Authentication**: Enterprise-grade security with Clerk:
  - Multi-factor authentication
  - Social login integration
  - Session management
  - Role-based access control
  - Activity monitoring
  - Secure password policies

- **Customizable Profiles**: Personalized user dashboards with:
  - Learning style preferences
  - Progress history
  - Achievement showcase
  - Custom avatar system
  - Social connections
  - Portfolio building

- **Offline Support**: Progressive Web App capabilities:
  - Offline content access
  - Background synchronization
  - Push notifications
  - Installable on devices
  - Automatic updates
  - Data persistence

- **Cross-platform**: Seamless experience across devices:
  - Responsive design
  - Touch optimization
  - Keyboard shortcuts
  - Dark/Light themes
  - Accessibility features
  - Cross-device sync

## 🚀 Installation Guide

### Prerequisites

- Node.js 18+ and npm 9+
- MongoDB database
- Required API keys:
  - Clerk (Authentication)
  - OpenAI & GROQ (AI)
  - TinyMCE (Editor)
  - YouTube API
  - Pinecone (Vector DB)
  - Pusher (Real-time)

### 🖥️ Local Development

1. **Clone and Install**
```bash
git clone https://github.com/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill.git
cd KUET-BitFest2025-Hackathon-XtraDrill
npm install
```

2. **Setup Environment**
```bash
cp .env.example .env.local
# Edit .env.local with your API keys and credentials
```

3. **Start Development Server**
```bash
npm run dev
# Open http://localhost:3000
```

### 🐳 Docker Setup

```bash
docker pull takitajwar17/xtradrill
docker run -p 3000:3000 takitajwar17/xtradrill
# Open http://localhost:3000
```

### Troubleshooting

- **Environment**: Double-check API keys and MongoDB connection
- **Port Conflict**: Use `npm run dev -- -p 3001` for alternate port
- **Docker**: Check logs with `docker logs <container_id>`

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15, React 18
- **Styling**: TailwindCSS, Framer Motion
- **Components**: Radix UI
- **State**: React Context

### Backend & Infrastructure
- **Runtime**: Node.js, Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Auth**: Clerk
- **Real-time**: Pusher
- **Deployment**: Docker, Vercel
- **Analytics**: Vercel Analytics & Speed Insights

### AI/ML
- **Language Models**: OpenAI GPT-4
- **Speech**: Google Cloud Text-to-Speech
- **NLP**: GROQ SDK
- **Voice**: Web Speech API

## 📝 License

MIT License - see [LICENSE](LICENSE)

## 📬 Contact

Team XtraDrill - [@xtradrill](https://twitter.com/xtradrill)  
Project Link: [https://github.com/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill](https://github.com/takitajwar17/KUET-BitFest2025-Hackathon-XtraDrill)

---

<div align="center">
Made with ❤️ by Team XtraDrill for KUET BitFest 2025
</div>