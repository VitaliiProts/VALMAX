<template>
  <nav>
    <transition name="fade" mode="out-in">
      <div class="menu" @click="active = !active">
        <div :class="[{'menu-icon--active': active}, 'menu-icon']">
        </div>
      </div>
    </transition>
    <transition name="fade">
      <ul v-if="active">
<!--        <li v-for="item in items" :key="item">{{ item }}</li>-->
      </ul>
    </transition>
  </nav>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
