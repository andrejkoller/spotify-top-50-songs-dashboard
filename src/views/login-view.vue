<template>
  <div class="login">
    <h1 class="login-title">
      Welcome<br />
      back
    </h1>
    <v-btn variant="elevated" rounded @click="loginWithSpotify">Continue</v-btn>
  </div>
</template>

<script setup>
import { generateCodeChallenge, generateCodeVerifier } from '@/utils/pkce'

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

async function loginWithSpotify() {
  const verifier = generateCodeVerifier()
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem('spotify_code_verifier', verifier)

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
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.login-title {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin: 2rem 0;
}

.v-btn {
  background-color: #1ed760;
  color: #000000;
  padding: 8px 24px;
  font-weight: 600;
}

.v-btn:hover {
  transform: scale(1.04);
  transition: transform 0.2s ease;
}

@media (max-width: 425px) {
  .login-title {
    font-size: 2rem;
  }
}
</style>
