<template>
  <main class="flex flex-wrap justify-center min-h-screen">
    <div>
      <div
        class="bg-green-800 bg-left-top bg-repeat-x bg-auto h-[400px]"
        style="background-image: url('/banner.jpg'); background-size: cover"
      ></div>

      <div class="-mt-64">
        <div class="w-full mb-12 text-center">
          <h1 class="text-5xl font-bold text-white">Our Team</h1>
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="user in users" :key="user.id">
            <UserCard :user="user" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('getUsers')
  },
  head() {
    return {
      title: 'Users',
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
  },
}
</script>
