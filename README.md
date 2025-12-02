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

- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework with Composition API
- [Vite](https://vite.dev/) - Next generation frontend build tool
- [Vue Router](https://router.vuejs.org/) - Official routing library for Vue.js
- [Pinia](https://pinia.vuejs.org/) - Intuitive state management
- [Vuetify](https://vuetifyjs.com/) - Material Design component framework
- [Vitest](https://vitest.dev/) - Blazing fast unit testing framework
- [Nightwatch](https://nightwatchjs.org/) - End-to-end testing solution
- [ESLint](https://eslint.org/) - Code linting and quality
- [Prettier](https://prettier.io/) - Opinionated code formatting

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- Spotify Developer Account - [Create an app here](https://developer.spotify.com/dashboard/applications)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/andrejkoller/spotify-dashboard.git
cd spotify-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Configure Spotify App Settings:

- Go to your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
- Create a new app or select your existing one
- Add `http://localhost:5173/callback` to the Redirect URIs
- Copy your Client ID

4. Configure environment variables:

Create a `.env.local` file in the project root:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
```

5. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📸 Screenshots
