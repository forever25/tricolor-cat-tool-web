import Components from 'unplugin-vue-components/vite'

export const autoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue'],
    dts: 'src/types/components.d.ts'
  })
}
