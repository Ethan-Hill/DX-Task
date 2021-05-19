<template>
  <div>
    <div class="mb-2 text-xl font-bold">
      {{ user.firstName }} {{ user.lastName }}
    </div>
    <p class="text-base text-white">
      {{ user.email }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>
