<template>
   <section>
       <article class=" pt-8 andycontent" >
          <nuxt-content :document = "article"/>
       </article>
   </section>
</template>

<script>
    export default {

        async asyncData ({ $content, params }) {
            const article = await $content('blog', params.slug).fetch()
            return {
                article
            }
        }
        
    }
</script> 

<style scoped>

.andycontent{
    
    padding-left: 200px;
    padding-right: 200px;
}


@media screen and (max-width: 900px) {
    .andycontent{
    
    padding-left: 30px;
    padding-right: 30px;
}
}

</style>