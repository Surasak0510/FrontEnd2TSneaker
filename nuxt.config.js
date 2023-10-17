export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '2TSneaker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cdbootstrap/css/cdb.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.4/dist/aos.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ]
  },

  script: [
    {
      src: '/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://kit.fontawesome.com/9d1d9a82d2.js',
      type: 'text/javascript',
      crossorigin: "anonymous"
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/cdbootstrap/js/bootstrap.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/cdbootstrap/js/cdb.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js',
      type: 'text/javascript'
    },
    {
      src: 'https://unpkg.com/aos@2.3.4/dist/aos.js',
      type: 'text/javascript'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
      type: 'text/javascript'
    },
    
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
