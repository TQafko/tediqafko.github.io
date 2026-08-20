import { Publication } from './types';

/**
 * Research publications shown on the Research page, grouped by year.
 *
 * To add a publication: add an object to this array with its year, an image
 * (require('../assets/img/...') or { uri: 'https://...' }), the title, the
 * venue/date subtitle, a short description, and a URL to find it online.
 * The page groups and orders everything automatically.
 */
export const publications: Publication[] = [
  {
    year: 2024,
    image: require('../assets/img/rov2024/rov_2024.jpg'),
    title:
      'Design and Control of an Underwater Remotely Operated Vehicle using Thrust Force Vectors',
    venue:
      '2024 IEEE MIT Undergraduate Research Technology Conference (URTC) \u00b7 Cambridge, MA, USA \u00b7 2024',
    description:
      'Presents the design and control of an eight-thruster underwater ROV, using thrust force vectors to achieve stable, precise movement in all six degrees of freedom.',
    url: 'https://doi.org/10.1109/URTC65039.2024.10937653',
  },
  {
    year: 2024,
    image: require('../assets/img/sphere/sphere_together_assembled.png'),
    title: 'Object Tracking Spherical Underwater Sensing Robot',
    venue:
      '2024 IEEE 15th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) \u00b7 Yorktown Heights, NY, USA \u00b7 2024',
    description:
      'A low-cost spherical autonomous robot for freshwater monitoring that combines reaction-wheel actuation, a buoyancy engine, and a modular sensor suite to track objects and collect environmental data in real time.',
    url: 'https://doi.org/10.1109/UEMCON62879.2024.10754667',
  },
  {
    year: 2024,
    image: {
      uri: 'https://c.pxhere.com/photos/7e/bb/wind_mills_solar_power_sunrise_wind_energy_power_solar_generator-1404655.jpg!d',
    },
    title: 'Achieving Net-Zero for 555 Huntington Avenue',
    venue:
      '2024 IEEE 15th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) \u00b7 Yorktown Heights, NY, USA \u00b7 2024',
    description:
      'A study of how a campus building can reach net-zero energy, analyzing its consumption and proposing a mix of renewable generation and efficiency improvements to offset it.',
    url: 'https://doi.org/10.1109/UEMCON62879.2024.10754759',
  },
  {
    year: 2023,
    image: require('../assets/img/2d-materials/chip1.jpg'),
    title: 'Bringing Graphene into the Undergraduate Lab',
    venue: 'APS March Meeting \u00b7 Art. no. S34.003 \u00b7 2023',
    description:
      'Describes an accessible approach for exfoliating and characterizing graphene and other 2D materials with equipment available in an undergraduate physics lab.',
    url: 'https://pubs.aip.org/aapt/ajp/article-abstract/92/9/703/3309084/Bringing-graphene-into-the-undergraduate-classroom',
  },
  {
    year: 2022,
    image: require('../assets/img/2d-materials/chip0.jpg'),
    title: 'Determination of hBN Thickness by Optical Contrast',
    venue: 'ASEE-NE 2022 \u00b7 Wentworth Institute of Technology, MA \u00b7 April 2022',
    description:
      'Introduces a fast optical-contrast method to estimate the thickness of hexagonal boron nitride flakes from standard microscope images, avoiding slower AFM measurements.',
    url: 'https://doi.org/10.18260/1-2--42164',
  },
];
