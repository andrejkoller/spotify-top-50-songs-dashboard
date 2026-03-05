<template>
  <div class="callback">
    <div class="auth-details">
      <div class="auth-success" v-if="token">
        <h2 class="auth-title">Authentication<br /> successful</h2>
        <v-btn variant="elevated" rounded>
          <router-link class="auth-link-text" to="/">Redirect</router-link>
        </v-btn>
      </div>
      <div class="auth-failure" v-else>
        <h2 class="auth-title">Authentication<br /> failed</h2>
        <v-btn variant="elevated" rounded>
          <router-link class="auth-link-text" to="/login">Try Again</router-link>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const token = ref('')
const router = useRouter()

onMounted(async () => {
  const code = new URLSearchParams(window.location.search).get('code')
  const verifier = localStorage.getItem('verifier')

  if (!code || !verifier) return

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    code_verifier: verifier,
  })

  try {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    const data = await res.json()
    token.value = data.access_token
    localStorage.setItem('spotify_token', token.value)

    if (token.value) {
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  } catch (error) {
    console.error('Token exchange failed:', error)
  }
})
</script>

<style scoped>
.callback {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.auth-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.auth-success,
.auth-failure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.auth-title {
  font-size: 3em;
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

.auth-link-text {
  color: inherit;
  font-weight: 600;
}
</style>
