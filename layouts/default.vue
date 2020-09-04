<template>
  <section>
    <Header/>
    <main>
      <Nuxt/>
    </main>
    <Footer/>
  </section>
</template>

<script>
    import Header from "@/components/header/Header";
    import Footer from "@/components/footer/Footer";

    export default {
        components: {Header, Footer}
    };
</script>
<style lang="scss">
  /*.wrapper {*/
  /*  width: 100%;*/
  /*  height: 100vh;*/
  /*  <!--background: linear-gradient(to right, #1C1C1C 50%, $colorWhite 50%);-->*/
  /*}*/

  /*.wrapper:before {*/
  /*  content: '';*/
  /*  border-left:  0.5px solid #949494;*/
  /*  height: 100%;*/
  /*  left: 61px;*/
  /*  position: absolute;*/
  /*}*/
</style>
