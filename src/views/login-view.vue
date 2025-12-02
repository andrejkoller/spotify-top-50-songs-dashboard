<template>
  <div class="login-container">
    <div class="login-content">
      <v-btn variant="elevated" rounded @click="loginWithSpotify">Login with Spotify</v-btn>
    </div>
  </div>
</template>

<script setup>
import { generateCodeChallenge, generateCodeVerifier } from '@/utils/pkce'

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

async function loginWithSpotify() {
  const verifier = generateCodeVerifier()
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem('verifier', verifier)

  const scope = ['user-top-read', 'user-read-private', 'user-read-email'].join(' ')

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope,
    code_challenge_method: 'S256',
    code_challenge: challenge,
  })

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`
}
</script>

<style>
@media (min-width: 1024px) {
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .login-container .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .login-container .login-content .v-btn {
    background-color: #1ed65e;
    color: white;
    transition: background-color 0.3s ease;
  }

  .login-container .login-content .v-btn:hover {
    background-color: #1db954;
  }
}
</style>
