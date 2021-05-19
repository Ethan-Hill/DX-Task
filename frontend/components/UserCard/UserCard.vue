<template>
  <div class="p-2 text-center text-white sm:p-10">
    <div
      class="
        flex flex-col
        items-center
        py-16
        overflow-hidden
        transition
        duration-500
        bg-yellow-500
        rounded
        shadow-lg
        sm:w-96
        w-72
      "
    >
      <Header :picture="user.picture" />

      <div class="px-6 py-4">
        <Hero :user="user" />
      </div>
      <div class="px-6 py-4">
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Items/Header/Header'
import Hero from './Items/Hero/Hero'
import Button from './Items/Button'
export default {
  components: {
    Header,
    Hero,
    Button,
  },
  props: ['user'],
}
</script>
