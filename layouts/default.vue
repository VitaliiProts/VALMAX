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
<style lang="scss"></style>
