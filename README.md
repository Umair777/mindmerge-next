# 🧠 MindMerge

> AI-powered collaborative question-answering platform with intelligent context refinement.

---

## 🚀 Overview

**MindMerge** is a modern full-stack application designed to enhance the way users ask, refine, and answer questions. By combining AI-assisted input transformation with structured discussion flows, MindMerge aims to deliver higher-quality knowledge exchange.

It is built using a scalable **monorepo architecture** with a strong focus on developer experience, modularity, and production readiness.

---

## ✨ Features

* 🧠 **AI-Enhanced Question Refinement** *(planned / toggle-ready)*
* 🔐 **Authentication via Supabase**
* 📝 **Structured Q&A Flow**
* ⚡ **Real-time Database Integration**
* 🌐 **Modern UI with Next.js (App Router)**
* 🧩 **Extensible Backend (FastAPI-ready)**
* 🔒 **Row-Level Security (RLS) Support**
* 🚀 **Deployment-ready Architecture**

---

## 🏗️ Architecture

```bash
mindmerge-next/
├── frontend/              # Next.js (App Router)
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
├── mindmerge-backend/     # FastAPI backend (optional / extensible)
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── .gitignore
└── README.md
```

---

## 🧰 Tech Stack

### Frontend

* **Next.js 14+ (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**

### Backend

* **Supabase (Primary Backend)**

  * PostgreSQL
  * Auth
  * Realtime
* **FastAPI (Pluggable Backend Layer)**

### DevOps

* **Vercel** (Frontend Deployment)
* **Render / Railway** (Backend Deployment - optional)
* **Docker** *(planned)*

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mindmerge-next.git
cd mindmerge-next
```

---

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

### 3. Setup Backend (Optional)

```bash
cd mindmerge-backend
python -m venv venv
source venv/bin/activate   # Linux / WSL
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## 🔐 Environment Variables

Create a `.env.local` inside `frontend/`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🗄️ Database Schema (Supabase)

### `questions` table

| Column        | Type      | Description              |
| ------------- | --------- | ------------------------ |
| id            | uuid      | Primary key              |
| user_id       | uuid      | Auth user reference      |
| original_text | text      | User input question      |
| created_at    | timestamp | Auto-generated timestamp |

---

## 🔒 Row Level Security (RLS)

Enable RLS:

```sql
alter table questions enable row level security;
```

Policy:

```sql
create policy "Users can insert their own questions"
on questions
for insert
with check (auth.uid() = user_id);
```

---

## 📡 API Flow

```text
User Input → Next.js UI → Supabase Auth → DB Insert → Redirect to Answer Page
```

---

## 🧪 Debugging Tips

* Use **Browser Console** for logs
* Check **Network tab → /rest/v1/**
* Verify **Supabase RLS policies**
* Ensure user is authenticated before DB writes

---

## 🧩 Future Roadmap

* 🤖 AI-based question rewriting (LLM integration)
* 📊 Answer ranking system
* 🧵 Threaded discussions
* 📁 Media attachments (images/files)
* 🔔 Notifications system
* 🐳 Dockerized deployment
* 📈 Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m "Add amazing feature"

# Push to the branch
git push origin feature/amazing-feature
```

Then open a Pull Request 🚀

---

## 🧑‍💻 Development Philosophy

* Keep it simple, then scale
* Prefer monorepo until complexity demands separation
* Use Supabase as backend-first approach
* Add backend services only when necessary

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Umair Ashraf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🌟 Acknowledgements

* Supabase team for backend-as-a-service
* Vercel for seamless frontend deployment
* Open-source community

---

## 📬 Contact

**Author:** Umair Ashraf
**Project:** MindMerge

---

> ⚡ *Built to explore the intersection of AI, collaboration, and scalable web systems.*
