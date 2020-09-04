<template>
  <div class="modal-menu">
    <div class="container">
      <div class="modal-menu__inner">

        <div class="modal-menu__inner-block modal-menu__inner-block--left">
          <ul>
            <li class="modal-menu__items" v-for="(link, key) in links" :key="key">
              <nuxt-link :to="link">{{ key }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="modal-menu__inner-block modal-menu__inner-block--right">
          <section class="modal-menu__contacts">
            <h3 class="modal-menu__contacts-title">Одесса, Украина</h3>
            <span class="modal-menu__contacts-mobile">+38 (066) 123 45 67</span>
            <span class="modal-menu__contacts-mobile">+38 (066) 123 45 67</span>
            <span class="modal-menu__contacts-email">Hello@valmax.com.ua</span>
            <div class="modal-menu__contacts-button">
              <button>Обсудить проект</button>
            </div>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
