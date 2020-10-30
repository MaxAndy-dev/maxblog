<template>
    <div>
        <section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8" v-for="article in articles" :key="article.id">
      
      <div class="py-8 flex flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font block bg-indigo-200 text-gray-900">Dat Soti</span>
          <span class="mt-1 text-gray-500 text-sm">{{ article.createdAt | formatDate }}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ article.title }}</h2>
          <p class="leading-relaxed"> {{  article.description }}</p>
          <nuxt-link class="text-teal-500 inline-flex items-center mt-4" :to = "`/${article.slug}/`">Li plis
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
     
     
    </div>
  </div>
</section>

    </div>
</template>

<script>

  import { format } from 'date-fns'

  

    export default {
      filters : {
    formatDate () {
      return format(new Date(),  'MM/dd/yyyy')
    }
  },
       async asyncData (context) {
         const { $content } = context
         const articles = await $content('blog').fetch()
         
         return {
           articles
         }
    }
    
  }
        
  
</script>

<style scoped>

h2{
  color:#63B3ED;
}

p{
  color: black;
}



</style>