import BurgerMenu from '@/components/burger-menu/BurgerMenu';

// TODO всі svg винестив  окремий спрайт
import facebook from '@/assets/img/facebook.svg';
import instagram from '@/assets/img/instagram.svg';
import youtube from '@/assets/img/youtube.svg';
import dribbble from '@/assets/img/dribbble.svg';
import behanceNetwork from '@/assets/img/behance-network.svg';

export default {
  data: () => ({
    languages: [
      { name: 'ru' },
      { name: 'ua' },
      { name: 'en' },
    ],
    items: [
      {
        icon: facebook,
        href: '#',
        alt: 'facebook'
      },
      {
        icon: instagram,
        href: '#',
        alt: 'instagram'
      },
      {
        icon: youtube,
        href: '#',
        alt: 'youtube',
      },
      {
        icon: dribbble,
        href: '#',
        alt: 'dribbble'
      },
      {
        icon: behanceNetwork,
        href: '#',
        alt: 'behance Network'
      },
    ]
  }),
  components: { BurgerMenu }
}
