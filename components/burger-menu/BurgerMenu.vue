<template>
  <nav>
    <transition name="fade" mode="out-in">
      <div class="menu" @click="active = !active">
        <div :class="[{'menu-icon--active': active}, 'menu-icon']">
        </div>
      </div>
    </transition>
    <transition name="fade">
<!--      // TODO доробити компонент-->
<!--      <modal-menu v-if="active" />-->
    </transition>
  </nav>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
