<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  script: [ 
            { src: '/lib/easing/easing.min.js' },  
            { src: '/lib/waypoints/waypoints.min.js' },  
            { src: '/lib/owlcarousel/owl.carousel.min.js' },  
            { src: '/js/main.js' },  
          ]
}),
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})
</script>
