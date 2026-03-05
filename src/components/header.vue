<template>
  <header class="header">
    <h1 class="header-title">
      <router-link to="/">Spotify Top 50 Songs</router-link>
    </h1>
    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-item">
          <v-btn variant="elevated" class="login-btn" rounded>
            <router-link class="link-text" to="/login">Login</router-link>
          </v-btn>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
}

.header-title {
  font-size: 2em;
  font-weight: normal;
  margin: 0;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

ul.navigation-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

ul.navigation-list .navigation-item .login-btn {
  background-color: #1ed760;
  color: #000000;
  padding: 8px 24px;
}

ul.navigation-list .navigation-item .login-btn:hover {
  transform: scale(1.04);
  transition: transform 0.2s ease;
}

ul.navigation-list .navigation-item a {
  text-decoration: none;
  font-size: 0.875rem;
}

.link-text {
  color: inherit;
  font-weight: 600;
}
</style>
