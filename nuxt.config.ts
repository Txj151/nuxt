// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    // '@nuxt/eslint',
    // '@nuxt/image',
    // '@nuxt/scripts',
    // '@nuxt/ui',
    // '@ant-design-vue/nuxt',
    // '@element-plus/nuxt',
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/i18n',
    // '@nuxtjs/seo',\
    "@huntersofbook/naive-ui-nuxt"
  ],
  imports: {
    dirs: [
      // 扫描顶层目录中模块
      'composables',
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      'composables/*/index.{ts,js,mjs,mts}',
      // 扫描给定目录中所有模块
      'composables/**'
    ]
  }
})