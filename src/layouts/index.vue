<script setup lang="ts">
import BaseHeader from './header/index.vue'
</script>

<template>
  <div class="flex flex-wrap justify-center bg-gray-100">
    <base-header />
    <main class="w-[1200px]">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<style scoped></style>
