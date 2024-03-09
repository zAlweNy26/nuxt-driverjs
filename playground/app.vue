<template>
  <div ref="myDiv">
    Nuxt module playground!
    <button @click="onClick()">
      Test
    </button>
  </div>
</template>

<script setup lang="ts">
const driver = useDriver()

const myDiv = ref<HTMLDivElement>()

const step: DriveStepRef = {
  element: myDiv,
  popover: {
    title: 'Popover title',
    description: 'Popover description'
  }
}

const onClick = () => {
  driver.highlight(step)
}
</script>
