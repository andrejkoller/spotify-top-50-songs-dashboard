<template>
  <div class="searchbar">
    <v-text-field
      label="Search for a track, artist, or album"
      placeholder="Type to search..."
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      v-model="searchQuery"
      @input="filterTracks"
      clearable
    />
  </div>
</template>

<script>
export default {
  name: 'AppSearchbar',
  props: {
    tracks: {
      type: Array,
    },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    filterTracks() {
      const query = this.searchQuery.toLowerCase()
      const filtered = this.tracks.filter(
        (track) =>
          track.name.toLowerCase().includes(query) ||
          track.artists.some((artist) => artist.name.toLowerCase().includes(query)) ||
          track.album.name.toLowerCase().includes(query),
      )
      this.$emit('search', filtered)
    },
  },
}
</script>

<style scoped>
.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
