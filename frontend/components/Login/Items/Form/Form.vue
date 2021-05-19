<template>
  <div class="w-full h-full mt-5">
    <form class="h-full">
      <Input
        id="email_address"
        name="email_address"
        placeholder="Email address"
        type="email"
        label="Email address"
        htmlfor="email_address"
      />
      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        label="Password"
        for="password"
      />
      <Checkbox />
      <Button :login="login" />
    </form>
  </div>
</template>

<script>
import Input from './Items/Input'
import Checkbox from './Items/Checkbox'
import Button from './Items/Button'
export default {
  components: {
    Input,
    Checkbox,
    Button,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['login'],
}
</script>
