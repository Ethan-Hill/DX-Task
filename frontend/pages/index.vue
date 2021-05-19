<template>
  <main class="flex items-center justify-center h-screen">
    <section
      v-if="!loading && !loggedIn"
      class="flex flex-col items-center justify-center"
    >
      <h1 class="text-4xl font-bold text-center text-white">Login</h1>
      <LoginContainer />
    </section>
    <section v-else class="flex flex-col items-center justify-center">
      <Loading v-if="!loggedIn" />
      <LoggedIn v-else />
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    loggedIn() {
      return this.$store.state.loggedIn
    },
  },
}
</script>
