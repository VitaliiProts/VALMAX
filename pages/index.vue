<template>
  <div>
    <intro v-if="!modal" />
    <modalMenu v-else />
  </div>
</template>

<script>
    import Intro from '@/components/intro/Intro.vue';
    import ModalMenu from '@/components/modal-menu/ModalMenu.vue';

    export default {
        data: () => ({
            modal: false
        }),
        components: {Intro, ModalMenu}
    }
</script>

<style></style>
