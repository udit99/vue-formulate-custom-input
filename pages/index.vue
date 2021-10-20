<template>
<div>
  <FormulateInput
  type="autocomplete"
  name="user"
  label="Search for a user"
  :options="[
    { value: 1, label: 'Jon Doe'},
    { value: 2, label: 'Jane Roe'},
    { value: 3, label: 'Bob Foe'},
    { value: 4, label: 'Ben Cho'},
  ]"
/>
</div>
</template>

<script>
export default {}
</script>
