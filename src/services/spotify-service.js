export async function exchangeCodeForToken(code) {
  const verifier = localStorage.getItem('spotify_code_verifier')

  if (!verifier) {
    throw new Error('No code verifier found in local storage')
  }

  const body = new URLSearchParams({
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
    code_verifier: verifier,
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!response.ok) {
    throw new Error('Failed to exchange code for token')
  }

  return await response.json()
}

export async function fetchTopTracks(token) {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch top tracks')
  }

  const data = await response.json()
  return data
}
