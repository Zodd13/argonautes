<template>
  <div class="home">
    <ArgonautesBanner />
    <HelloWorld />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import ArgonautesBanner from '@/components/ArgonautesBanner.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ArgonautesBanner
  }
}
</script>
