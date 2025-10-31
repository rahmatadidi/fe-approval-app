# Approval App Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-000?logo=react&logoColor=white" />
</p>

Frontend aplikasi manajemen cuti role **Employee**, **Head**, dan **GM**.  
Dibangun dengan **React + TS**, **Vite**, **Tailwind**, **Zustand**, dan **Axios**.

---

## ✨ Features

- Login Authentication (JWT)
- Submit Leave
- View Leave List + Pagination
- Approve / Reject Leave (Head & GM)
- Leave History Tracking
- Role-Based Pages
- Responsive UI (TailwindCSS)
- State management with Zustand

---

## 🚀 Tech Stack

| Tech | Description|
|---|---|
| React + Vite | Frontend framework |
| TypeScript | Strong typing |
| TailwindCSS | UI styling |
| Zustand | State management |
| Axios | HTTP client |
| React Router Dom | Routing |

---

## 📂 Folder Structure

src/
├─ api/ # axios + API services
├─ components/ # UI components
├─ hooks/ # custom hooks (useLeaves, useAuth)
├─ stores/ # Zustand stores
├─ pages/ # Route pages (Login, Leave List, Approval List)
├─ types/ # TS interfaces
└─ utils/ # Helpers & interceptors


---

## ⚙️ Setup Project

### 1️⃣ Clone project

```bash
git clone https://github.com/rahmatadidi/fe-approval-app.git
cd fe-approval-app
```


**Install dependencies**
```bash
npm install
```

***Jalankan Project***
```bash
npm run dev
```

🔒 Authentication Flow

Login → store token in state/localStorage

Axios interceptor attaches Bearer token

Protected routes for Head & GM

📝 Notes

Pastikan backend sudah running

Sesuaikan .env dengan URL backend

JWT disimpan & dikirim via Authorization Header

🎯 Future Improvements

Refresh Token






