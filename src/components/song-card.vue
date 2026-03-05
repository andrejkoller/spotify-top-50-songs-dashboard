<template>
  <v-card class="song-card" variant="outlined" @click="() => navigateToTrack(track)">
    <div class="song-card-wrapper">
      <p class="song-card-index">{{ index + 1 }}</p>
        <v-img class="song-card-image" :src="track.album.images[0].url" height="200" width="200"></v-img>
    </div>
    <div class="song-card-title">
      <v-card-title>{{ track.name }}</v-card-title>
      <p>{{ track.album.name }}</p>
      <v-card-subtitle>{{ track.artists[0].name }}</v-card-subtitle>
    </div>
    <div class="song-card-duration">
      <v-card-text>
        <span>{{ (track.duration_ms / 60000).toFixed(2).charAt(0) }}</span>
        <span>:</span>
        <span>{{ (track.duration_ms / 60000).toFixed(2).slice(2, 4) }}</span>
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  track: Object,
  index: Number,
})

function navigateToTrack(track) {
  window.open(track.external_urls.spotify, '_blank')
}
</script>

<style scoped>
.song-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 1.5em;
  width: 100%;
  border-color: #7c7c7c;
  border-radius: 4px;
  cursor: pointer;
}

.song-card:hover {
  border-color: #ffffff;
  transition: border-color 0.2s ease;
}

.song-card .song-card-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
}

.song-card .song-card-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
}

.song-card-title p {
  margin: 0;
}

.v-card-title {
  padding: 0;
}

.v-card-subtitle {
  padding: 0;
  color: #b3b3b3;
}
</style>
