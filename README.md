# 🍽️ AI-Powered Diet Planner (MERN + Paxsenix AI)

A smart MERN Stack application that generates personalized meal and nutrition plans using **Paxsenix AI**.  
The system creates custom diet recommendations based on **6 key user metrics** including age, weight, gender, lifestyle, and fitness goals.

---

## 🚀 Features

### 🤖 AI-Generated Meal Plans
- Uses **Paxsenix AI** to generate dynamic, personalized diet recommendations.
- Processes structured JSON responses for clean nutrition output.

### 🔐 Secure Authentication
- Built with **Node.js + Express.js**
- Implements **JWT-based authentication**
- Proper request validation & protected routes

### 🗂️ Clean API Layer
- Efficient backend architecture using controllers, routes & middleware
- Reliable Axios-based API communication

### 🎨 Modern & Responsive UI
- Frontend built with **React.js**
- Styled using **Tailwind CSS**
- Smooth UX with loading states & toast notifications (`react-hot-toast`)

### ☁️ Deployment
- End-to-end deployment on **Vercel**
- Highly available & scalable cloud hosting

---

## 🛠️ Tech Stack

**Frontend:**  
React.js, Tailwind CSS, Axios, react-hot-toast  

**Backend:**  
Node.js, Express.js, JWT Authentication, Mongoose  

**Database:**  
MongoDB (Atlas)

**AI Engine:**  
Paxsenix AI API

**Deployment:**  
Vercel

---

## 📦 How It Works (Flow)

1. User creates an account → logs in  
2. Provides details like age, weight, height, goal, etc.  
3. Backend sends a structured request to Paxsenix AI  
4. Receives AI-generated meal plan  
5. Parsed and displayed in a clean UI  
6. User can regenerate plans anytime

---

## 📸 Screenshots
(Add here when ready)

---

## ▶️ Installation

```bash
# Clone repo
git clone https://github.com/hritikS0/ai-diet-planner.git
cd ai-diet-planner

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install

# Run
npm run dev
