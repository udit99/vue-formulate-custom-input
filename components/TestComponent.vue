<template>
  <div>
    All is well in the world 👍
    <input type="search" v-model="context.model">
  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    }
  }
}
</script>
