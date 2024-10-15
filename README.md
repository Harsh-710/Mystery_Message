# True Feedback App

This is a full-stack application built with **Next.js** that enables users to send anonymous messages to others. It offers user authentication, database integration, and AI-powered message suggestions to enhance user engagement.

---

## 🚀 Features

1. **Anonymous Messaging**:
   - Users can send and receive messages anonymously.
   - Recipients can choose to opt-in or opt-out of receiving messages.

2. **Authentication**:
   - Secure user authentication using **NextAuth.js**.
   - Protected routes ensure only authenticated users can access certain features.

3. **CRUD Functionality**:
   - Allows users to create, read, update, and delete messages seamlessly.

4. **AI Integration**:
   - Provides intelligent suggestions and conversation starters for messages using AI.

5. **Responsive Design**:
   - Fully optimized for mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) (React Framework)
- CSS Modules for styling

### Backend
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [NextAuth.js](https://next-auth.js.org/) for authentication

### Database
- MongoDB Atlas for storing user and message data

### AI Integration
- OpenAI API for generating message suggestions

---

## 🛠️ Environment Variables

Create a .env file in the root directory and add the following variables:
- RESEND_API_KEY = your-api-key-for-resend-email-service
- NEXTAUTH_SECRET = your-random-secret
- MONGODB_URI = your-mongodb-connection-string
- OPENAI_API_KEY = your-openai-api-key

Replace placeholders with your actual credentials.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Harsh-710/True_Feedback.git

   ```

2. **Install dependencies:**

   ```bash
   cd true-feedback
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**

   ```bash
   http://localhost:3000
   ```


---

## 🛠️ Future Enhancements

- Add real-time messaging with WebSockets.
- Implement message reporting and moderation.
- Enhance AI suggestions with personalized preferences

---

## 🤝 Contributing

- Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or new features.

---

## 🛠️ Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [MongoDB Documentation](https://www.mongodb.com/docs/atlas/)

---
