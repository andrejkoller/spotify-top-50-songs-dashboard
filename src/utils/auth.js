import { generateCodeChallenge, generateCodeVerifier } from './pkce'

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
const scopes = ['user-top-read']

export async function getSpotifyLoginUrl() {
  const verifier = generateCodeVerifier()
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem('spotify_code_verifier', verifier)

  const authEndpoint = 'https://accounts.spotify.com/authorize'

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: scopes.join(' '),
    code_challenge_method: 'S256',
    code_challenge: challenge,
  })

  return `${authEndpoint}?${params.toString()}`
}
