<script setup>
defineProps({
  link: String,
  icon: String,
  title: String,
})
</script>

<template>
  <div
    class="text-gray-300 hover:text-white transition duration-150"
    :title="title">
    <a :href="link" target="_blank">
      <i class="fa-xl" :class="icon"></i>
    </a>
  </div>
</template>
