

# My Portfolio Website

(The wrong name was intentional haha)

Welcome to my personal portfolio website! This project showcases my skills, projects, and achievements as a developer. It is built using **React**, **Tailwind CSS**, and **Vite**, with animations powered by **Framer Motion**.

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Interactive Animations**: Smooth animations and hover effects using Framer Motion.
- **Particle Background**: Dynamic particle effects in the background using `tsparticles`.
- **Project Showcase**: A dedicated section to highlight my projects with descriptions and images.
- **About Me**: A section that introduces me, my skills, and my journey in software development.
- **Visitor Counter**: Simple visitor tracking using localStorage (can be upgraded to Firebase).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool for modern web development.
- **Framer Motion**: A production-ready motion library for React.
- **TSParticles**: A lightweight library for creating particle effects.
- **Firebase** (optional): For visitor analytics and data storage.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase (Optional)**
   - If you want to use Firebase for visitor analytics, replace the demo values in `.env` with your actual Firebase credentials
   - If you don't have Firebase credentials, the project will work with localStorage-based visitor counting

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Firebase Configuration

The project includes Firebase integration for visitor analytics, but it's designed to work without Firebase credentials. If you want to use Firebase:

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Replace the demo values in `.env` with your actual Firebase configuration
4. The visitor counter will automatically switch from localStorage to Firebase

## Demo Mode

When running without Firebase credentials, the project uses:
- localStorage for visitor counting
- Mock Firebase objects to prevent errors
- All features work normally, just without cloud persistence
