import { defineStore } from 'pinia'

type RouterType = {
  curMenuName: string
}

export const useRouterStore = defineStore('router', {
  state: (): RouterType => {
    return {
      curMenuName: 'Home'
    }
  },
  getters: {
    getCurMenuName(): string {
      return this.curMenuName
    }
  },
  actions: {
    setCurMenuName(v: string) {
      this.curMenuName = v
    }
  }
})
