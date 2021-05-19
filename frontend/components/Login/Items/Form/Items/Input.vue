<template>
  <div class="flex flex-col my-3">
    <label :for="htmlfor" class="text-[#6f7a88] font-medium text-base">
      {{ label }}</label
    >
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="
        py-1
        px-3
        font-base
        bg-gray-100
        mt-2
        shadow
        rounded-lg
        h-16
        border border-solid border-[#eaeaea]
        hover:bg-white
        focus:outline-none
        focus:bg-white
        active:bg-white
        active:outline-none
      "
    />
  </div>
</template>

<script>
export default {
  props: ['name', 'type', 'id', 'placeholder', 'label', 'htmlfor'],
}
</script>
