import { Project } from '../types';

export const droneshow: Project = {
  slug: 'droneshow',
  title: 'Droneshow',
  date: '2023-06-01',
  description:
    'A coordinated multi-drone system using Kalman filters and triangulation to perform precise, dynamic aerial 3d patterns.',
  tags: ['robot', 'IoT', 'ESP32', 'KiCad', 'MATLAB', '3dcad', 'Solidworks'],
  image: require('../../assets/img/drone/drone.jpg'),
  content: [
    { type: 'heading', text: 'Overview' },
    {
      type: 'paragraph',
      text: 'This project uses optimized Kalman filters and three-camera triangulation to accurately track multiple drones in an enclosed environment. Precise position control enables the creation of dynamic animations, simulating a drone show. Iterative design improvements enhanced maneuverability and obstacle avoidance, while a dynamic model accounts for disturbances like wind and propeller-induced air currents. Each drone features a carbon fiber frame, F4 STM32 flight controller, 2.4GHz transmitter, and 3.7V Li-ion battery for lightweight, responsive performance.',
    },
    { type: 'image', source: require('../../assets/img/drone/drone.gif'), maxWidth: 460 },
    { type: 'heading', text: 'Images of Various Systems Designed' },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/drone/drone3.png') },
        { source: require('../../assets/img/drone/drone_2.jpg') },
        { source: require('../../assets/img/drone/drone_3.jpg') },
      ],
    },
  ],
};
