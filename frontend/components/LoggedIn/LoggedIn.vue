<template>
  <div
    class="
      px-8
      mt-24
      pt-5
      pb-10
      w-[460px]
      h-[200px]
      rounded-xl
      bg-white
      flex flex-col
    "
  >
    <Hero :redirect-client="redirectClient" />
  </div>
</template>

<script>
import Hero from './Items/Hero/Hero'
export default {
  components: { Hero },
  methods: {
    redirectClient() {
      this.$router.push('/users')
    },
  },
}
</script>
