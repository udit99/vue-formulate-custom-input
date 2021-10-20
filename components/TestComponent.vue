<template>
  <div>Helo World </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  watch: {
    model () {
      this.selectedIndex = 0
    }
  },
  computed: {
    model () {
      return this.context.model
    },
    selection () {
      if (this.filteredOptions[this.selectedIndex]) {
        return this.filteredOptions[this.selectedIndex]
      }
      return false
    },
    filteredOptions () {
      if (Array.isArray(this.context.options) && this.context.model) {
        const isAlreadySelected = this.context.options.find(option => option.label === this.context.model)
        if (!isAlreadySelected) {
          return this.context.options
            .filter(option => option.label.toLowerCase().includes(this.context.model.toLowerCase()))
        }
      }
      return []
    }
  },
  methods: {
    increment () {
      const length = this.filteredOptions.length
      if (this.selectedIndex + 1 < length) {
        this.selectedIndex++
      } else {
        this.selectedIndex = 0
      }
    },
    decrement () {
      const length = this.filteredOptions.length
      if (this.selectedIndex - 1 >= 0) {
        this.selectedIndex--
      } else {
        this.selectedIndex = length - 1
      }
    }
  }
}
</script>