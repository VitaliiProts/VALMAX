import ModalMenu from '@/components/modal-menu/ModalMenu.vue';

export default {
  data: () => ({
    active: false,
    items: [
      'Главная',
      'О нас',
      'Портфолио',
      'Блог',
      'Контакти'
    ]
  }),
  components: {ModalMenu}
}
