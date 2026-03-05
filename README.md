## Short description

A modern Vue 3 web application that displays your Spotify Top 50 tracks. Authenticate with your Spotify account, search your top tracks, and view details in a clean, responsive dashboard UI.

## ✨ Features

- Spotify OAuth2 Authentication - Secure login using PKCE flow (no client secret required)
- Top 50 Tracks Display - View your most listened to tracks
- Real-time Search - Filter tracks by name, artist, or album
- Modern UI - Beautiful, responsive interface built with Vuetify
- Direct Spotify Integration - Click any song to open it directly in Spotify
- Fast & Lightweight - Built with Vite for optimal performance

## 🛠️ Technologies Used

- Vue 3 - Progressive JavaScript framework with Composition API
- Vite - Next generation frontend build tool
- Vue Router - Official routing library for Vue.js
- Pinia - Intuitive state management
- Vuetify - Material Design component framework
- Vitest - Blazing fast unit testing framework
- Nightwatch - End-to-end testing solution
- ESLint - Code linting and quality
- Prettier - Opinionated code formatting

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- Spotify Developer Account - [Create an app here](https://developer.spotify.com/dashboard/applications)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/andrejkoller/spotify-top-50-songs-dashboard.git
cd spotify-top-50-songs-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Configure Spotify App Settings:

- Go to your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
- Create a new app or select your existing one
- Add `http://127.0.0.1:8000/callback` to the Redirect URIs
- Copy your Client ID

4. Configure environment variables:

Create a `.env.local` file in the project root:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:8000/callback
```

5. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📸 Screenshots

<img width="1920" height="1084" alt="Screenshot 1" src="https://github.com/user-attachments/assets/f0905a10-0844-4a4d-b915-25eca5f734b7" />
<img width="1920" height="1084" alt="Screenshot 2" src="https://github.com/user-attachments/assets/1d45090d-f8b8-40c4-8d57-d16e56827d58" />
<img width="1920" height="1084" alt="Screenshot 3" src="https://github.com/user-attachments/assets/21c45473-fe66-4029-9b5f-93bc843e3245" />
<img width="1920" height="1084" alt="Screenshot 4" src="https://github.com/user-attachments/assets/29b62007-1188-45d7-9e7b-092f66dc6b76" />
