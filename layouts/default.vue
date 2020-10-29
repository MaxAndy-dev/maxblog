<template>
  <div>
    <HeaderCom/> 
    <Nuxt />
  <FooterLo/>
  </div>
</template>

<script>

import HeaderCom from '@/components/HeaderCom.vue'
import FooterLo from '../components/FooterLo'

export default{

      components:{
         HeaderCom ,
         FooterLo
      }


}


</script>


<style>

    body{
      background-color: #f1faee;
      
    }

    




</style>
