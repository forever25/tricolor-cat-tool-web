<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRouterStore } from '@/store/modules/router'

const routerStore = useRouterStore()
const { push } = useRouter()

const menuList = [
  {
    title: '首页',
    name: 'Home'
  },
  {
    title: '站内工具',
    name: '/'
  },
  {
    title: '外链工具',
    name: '/'
  }
]

function handleClickMenu(routeName: string) {
  push({ name: routeName })
}
</script>

<template>
  <div class="flex items-center justify-center w-full bg-white h-14">
    <header class="h-full w-[1200px] flex items-center justify-start">
      <div></div>
      <ul class="flex h-full">
        <li
          :class="`transition-all flex items-center mx-4 h-full text-sm cursor-pointer select-none border-b-blue-600 pt-0.5 hover:border-b-2 hover:border-opacity-100 hover:text-opacity-100 ${
            routerStore.getCurMenuName === it.name
              ? 'border-b-2 border-opacity-100 text-opacity-100'
              : 'border-b-2 border-opacity-0 text-opacity-90'
          }`"
          v-for="it in menuList"
          :key="it.name"
          @click="handleClickMenu(it.name)"
        >
          {{ it.title }}
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped></style>
