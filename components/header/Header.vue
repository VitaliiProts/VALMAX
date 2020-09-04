<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <div data-aos="fade-down-right" class="header__link">
            <nuxt-link to="/">
              <img src="@/assets/img/logo.png" alt="logo">
              <span>Valmax</span>
            </nuxt-link>
          </div>
        </div>

        <nav class="nav">
          <nuxt-link class="nav__link" to="/portfolio">Портфолио</nuxt-link>
        </nav>

        <burger-menu/>

        <div>
          <ul data-aos="flip-right" class="lang">
            <li class="lang__item" v-for="lang in languages">{{ lang.name }}</li>
          </ul>

          <!--       // TODO можна винести в окремий компонент -->
          <ul data-aos="flip-right" class="social-network">
            <li class="social-network__item" v-for="(item, key) in items" :key="key">
              <a :href="item.href" target="_blank">
                <img :src="item.icon" :alt="item.alt">
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </header>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
