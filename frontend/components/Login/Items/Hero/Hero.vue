<template>
  <div class="flex flex-col justify-start">
    <Title text="Sign in" />
    <Caption text="Please enter your email and password below" />
  </div>
</template>

<script>
import Title from './Items/Title'
import Caption from './Items/Caption'
export default {
  components: {
    Title,
    Caption,
  },
}
</script>
