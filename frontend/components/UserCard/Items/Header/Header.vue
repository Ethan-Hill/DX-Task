<template>
  <UserImage :picture="picture" />
</template>

<script>
import UserImage from './Items/UserImage'
export default {
  components: {
    UserImage,
  },
  props: ['picture'],
}
</script>
