<template>
  <div class="searchbar">
    <v-text-field
      label="Search for a track, artist, or album"
      placeholder="Type to search..."
      variant="outlined"
      v-model="searchQuery"
      @input="filterTracks"
      clearable
    >
      <template #prepend-inner>
        <SearchIcon :size="20" />
      </template>
    </v-text-field>
  </div>
</template>

<script>
import { SearchIcon } from 'lucide-vue-next'
export default {
  name: 'AppSearchbar',
  components: {
    SearchIcon,
  },
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
