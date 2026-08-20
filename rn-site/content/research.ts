import { Publication } from './types';

/**
 * Research publications shown on the Research page, grouped by year.
 *
 * To add a publication: add an object to this array with its year, an image
 * (require('../assets/img/...') or { uri: 'https://...' }), and the citation.
 * The page groups and orders everything automatically.
 */
export const publications: Publication[] = [
  {
    year: 2024,
    image: require('../assets/img/rov2024/rov_2024.jpg'),
    citation:
      'T. Qafko. \u201cDesign and Control of an Underwater Remotely Operated Vehicle using Thrust Force Vectors.\u201d 2024 IEEE MIT Undergraduate Research Technology Conference (URTC), Cambridge, MA, USA, 2024, pp. 1\u20135. doi: 10.1109/URTC65039.2024.10937653.',
  },
  {
    year: 2024,
    image: require('../assets/img/sphere/sphere_together_assembled.png'),
    citation:
      'T. Qafko, P. Blanchard, Q. Vu, and F. Aveta. \u201cObject Tracking Spherical Underwater Sensing Robot.\u201d 2024 IEEE 15th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), Yorktown Heights, NY, USA, 2024, pp. 631\u2013635. doi: 10.1109/UEMCON62879.2024.10754667.',
  },
  {
    year: 2024,
    image: {
      uri: 'https://c.pxhere.com/photos/7e/bb/wind_mills_solar_power_sunrise_wind_energy_power_solar_generator-1404655.jpg!d',
    },
    citation:
      'F. Aveta, L. M. Cabral, T. Colville, A. F. Gonneville, T. Qafko, and S. Basnet. \u201cAchieving Net-Zero for 555 Huntington Avenue.\u201d 2024 IEEE 15th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), Yorktown Heights, NY, USA, 2024, pp. 620\u2013625. doi: 10.1109/UEMCON62879.2024.10754759.',
  },
  {
    year: 2023,
    image: require('../assets/img/2d-materials/chip1.jpg'),
    citation:
      'A. Seredinski, T. Qafko, N. Hillyer, and A. Norman. \u201cBringing Graphene into the Undergraduate Lab.\u201d 2023, vol. 2023, Art. no. S34.003, 2023.',
  },
  {
    year: 2022,
    image: require('../assets/img/2d-materials/chip0.jpg'),
    citation:
      'T. Qafko, T. Larson, and A. M. Seredinski. \u201cDetermination of hBN Thickness by Optical Contrast.\u201d Paper presented at ASEE-NE 2022, Wentworth Institute of Technology, Massachusetts, April 2022. doi: 10.18260/1-2--42164.',
  },
];
