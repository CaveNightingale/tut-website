<template>
  <div class="inner-page">
    <iframe
      src="/bluemap/index.html"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.inner-page {
  position: fixed;
  bottom: 0;
  height: calc(100vh - 100px);
  width: 100%;
}
</style>
