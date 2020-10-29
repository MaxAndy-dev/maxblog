<template>
<div>
     
<section class=" landipage">
   <img src="https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-9/81837445_2522595587959546_7832500711165263872_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=I7EzOLkdgP0AX-UupTp&_nc_ht=scontent.fsti4-1.fna&oh=cb3f03d75404491aca133567c8b87f08&oe=5FB0D86F" alt="">

    <div class="">
    
      <h2>Max Andy Angrand</h2>
      <span><em> Etidyan Jeni Endistriyèl/ Apranti Software Developer</em></span>

    <div class="links">
        <nuxt-link to="/">Blòg</nuxt-link>
        <nuxt-link to="/Ressources">Resous</nuxt-link>
      </div>
      </div>
      
 
 </section>
</div>
 
</template>

<script>
export default {
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.landipage {
  padding-top: 4rem;
  display: flex;
   margin-left: 15rem;
   margin-right: 15rem; 
  background-color: #d2dbcf;
  padding: 25px;
  margin-top: 3rem;
  box-shadow: 0 0 7px #63B3ED;
  
}

.version{
  text-align: end;
}

.landipage h2 {
  margin-left: 2rem;
  padding-top: 8px;
  color: black;
  font-size: 25px;
  font-weight: bold;

}

span {
  color: rgb(163, 163, 160);
   margin-left: 2rem;
   
}

img {
  border-radius: 50%;
  width: 160px;
}

.links a{
  color: black;
  display: inline-flex;
  padding-top: 2rem;
  margin: 10px;
  margin-left: 5rem;
  text-decoration: none;
  border-bottom: 1px dotted #63B3ED ;

}

.links a:hover{
  color: beige;

}





@media screen and (max-width: 900px){
  .landipage {
  padding-top: 4rem;
  /* display: flex; */
    margin-left: 0rem; 
   margin-right: 0rem; 
   background-color: #d2dbcf;
  padding: 2px;
   box-shadow: 0 0 7px #63B3ED;
  width: 420px;
  height: 140px;
  /* box-shadow: 0 0 10px; */
  
  
}
.landipage h2 {
  margin-left: 1rem;
  padding-top: 8px;
   color: black;
  font-size: 25px;
  font-weight: bold;
}
span {
  /* padding-top: 0; */
  color: rgb(107, 107, 105);
   margin-left: 1rem;
   font-size: 9px;
   
}

img {
  padding-top: 8px;
  border-radius: 50%;
  width: 4rem;
    height: 4rem;
  
}



.links a{
   color: black;
  padding-top: 0.5px;
   margin: 10px;
   margin-left: 1rem;
  text-decoration: none;
  border-bottom: 1px dotted #63B3ED;
  font-size: 13px;  
  
}



}

@media (min-width: 768px) and (max-width: 1024px) {
  
  /* CSS */
  .landipage {
  padding-top: 4rem;
  display: flex;
   margin-left: 12rem;
   margin-right: 15rem; 
  background-color:#d2dbcf;
  padding: 25px;
  margin-top: 3rem;
  box-shadow: 0 0 7px #63B3ED;
  
}
  
}


  



</style>
