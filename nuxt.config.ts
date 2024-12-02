// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2024-11-01',
devtools: { enabled: true },
modules: [
 'shadcn-nuxt',
 '@nuxtjs/tailwindcss',
 '@nuxtjs/color-mode',
 ['@nuxtjs/google-fonts', 
                    {
                    families: {
                    Lato:{
                                    wght:[300,400,700],
                                    ital:[300],
                    }
                    }
}],
 '@nuxt/icon',
 '@nuxt/image',
 '@pinia/nuxt'
],
shadcn: {
   prefix: 'Ui',
   componentDir: './components/ui'
},
pinia:{
	storesDirs:['./store/**'],
},
})