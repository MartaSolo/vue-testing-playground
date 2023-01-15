<template>
  <nav>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">Profile</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: true,
    }
  }
}
</script>

<style>
a {
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
  padding: 0 2rem 0 2rem;
}
</style>