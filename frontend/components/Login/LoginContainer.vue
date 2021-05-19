<template>
  <div
    class="
      px-8
      mt-24
      pt-5
      pb-10
      w-[340px]
      h-[500px]
      md:w-[460px]
      md:h-[500px]
      rounded-xl
      bg-white
      flex flex-col
    "
  >
    <!-- <Header /> -->
    <Hero />
    <Form :login="login" />
  </div>
</template>

<script>
// import Header from './Items/Header/Header'
import Hero from './Items/Hero/Hero'
import Form from './Items/Form/Form'
export default {
  components: {
    // Header,
    Hero,
    Form,
  },
  methods: {
    login(e) {
      e.preventDefault()
      this.$store.dispatch('loginClient')
    },
  },
}
</script>
