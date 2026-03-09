<template>
  <div class="dashboard">
    <Searchbar :tracks="tracks" @search="handleSearch" />
    <div class="spotify-top-tracks" v-if="filteredTracks.length > 0">
      <SongCard
        class="song-card-track"
        v-for="(track, index) in filteredTracks"
        :key="index"
        :track="track"
        :index="index"
      />
    </div>
    <p class="notification-message" v-else>
      No tracks found. Please try a different search term or check your Spotify access token.
    </p>
  </div>
</template>

<script>
import Searchbar from '@/components/searchbar.vue'
import SongCard from '@/components/song-card.vue'
import { fetchTopTracks } from '@/services/spotify-service'

export default {
  components: {
    Searchbar,
    SongCard,
  },
  data() {
    return {
      tracks: [],
      filteredTracks: [],
    }
  },
  async mounted() {
    const token = localStorage.getItem('spotify_access_token')
    if (!token) {
      console.error('No access token found in local storage. Redirecting to login.')
      this.$router.push('/login')
      return
    }
    const data = await fetchTopTracks(token)
    if (data) {
      this.tracks = data.items
      this.filteredTracks = data.items
    } else {
      console.error('Failed to fetch top tracks from Spotify API')
    }
  },
  methods: {
    handleSearch(filtered) {
      this.filteredTracks = filtered
    },
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.spotify-top-tracks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.song-card-track {
  margin-bottom: 1.375rem;
}

.notification-message {
  font-size: 1em;
  color: #b3b3b3;
  margin: 1rem 0;
  text-align: center;
}
</style>
