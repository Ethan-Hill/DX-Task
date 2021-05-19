<template>
  <div class="flex flex-col justify-start">
    <Title text="Successfully logged in" />
    <Caption text="Awesome, go check out our users!" />
    <Button :redirect-client="redirectClient" />
  </div>
</template>

<script>
import Title from './Items/Title'
import Caption from './Items/Caption'
import Button from './Items/Actions/Button'
export default {
  components: {
    Title,
    Caption,
    Button,
  },
  props: ['redirectClient'],
}
</script>
