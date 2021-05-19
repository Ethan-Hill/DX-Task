<template>
  <button
    class="
      px-6
      py-3
      mt-4
      text-base
      font-light
      transition
      border border-solid border-[rgba(0,0,0,.08)]
      bg-white
      rounded-lg
      outline-none
      cursor-pointer
      hover:bg-green-500
      hover:text-white
    "
    @click="login"
  >
    Sign in
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['login'],
}
</script>
