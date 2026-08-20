import { Asset } from 'expo-asset';
import { Project } from '../types';

const reactionWheelVideoUri = Asset.fromModule(
  require('../../assets/img/sphere/reaction-wheel1.mp4'),
).uri;

export const sphere: Project = {
  slug: 'object-tracking-sphere',
  title: 'Object Tracking Sphere',
  date: '2019-03-05',
  description:
    'A spherical autonomous robot designed for low-cost freshwater monitoring, integrating reaction-wheel actuation, a buoyancy engine, and a modular sensor suite for real-time environmental data collection.',
  tags: ['robot', 'water', 'IoT', 'SolidWorks', 'Network'],
  image: require('../../assets/img/sphere/watersphere.png'),
  content: [
    { type: 'heading', level: 1, text: 'Overview' },
    {
      type: 'paragraph',
      text: 'A spherical autonomous robot designed for low-cost freshwater monitoring, integrating reaction-wheel actuation, a buoyancy engine, and a modular sensor suite for real-time environmental data collection.',
    },
    {
      type: 'video',
      uri: reactionWheelVideoUri,
      caption:
        '**Figure 1.** A prototype assembly of one of the components in the robot called a reaction wheel. Uses angular momentum to orient the sphere. Two of these on the sphere control 3 degrees of freedom.',
    },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/sphere/sphere_together_assembled.png') },
        { source: require('../../assets/img/sphere/sphere_assembly.png') },
      ],
      caption: '**Figure 2.** The models above were designed and rendered in SolidWorks.',
    },
    { type: 'heading', text: 'Project Objectives' },
    {
      type: 'list',
      items: [
        'Design an autonomous spherical robot for underwater and surface navigation.',
        'Implement reaction-wheel and buoyancy propulsion for precise movement.',
        'Integrate sensors to monitor key water-quality parameters in real time.',
        'Ensure a compact, waterproof, and energy-efficient design for extended operation.',
      ],
    },
    { type: 'heading', text: 'Diagram of Electronics' },
    {
      type: 'image',
      source: require('../../assets/img/sphere/diagram.png'),
      caption:
        '**Figure 3.** The diagram above captures the computer station running a flask software for communication, the main control unit with all the sensors and control logic, the power distribution, motor controllers, and buoyancy engine.',
    },
    { type: 'heading', text: 'Hardware used' },
    { type: 'paragraph', text: 'Below is a table for all the components that were used to build this sphere.' },
    {
      type: 'table',
      headers: ['Component', 'Description'],
      rows: [
        ['**GT-U7 GPS Module**', 'Provides global positioning data for navigation and locating the robot in aquatic environments.'],
        ['**ADS1115 16-bit ADC**', '4-channel ADC converter used for accurate measurement of analog sensor inputs.'],
        ['**BN008 IMU**', 'Supplies orientation, acceleration, and angular velocity data for stable underwater movement.'],
        ['**L298N H-Bridge Motor Driver**', 'Controls the reaction wheels and buoyancy engine, capable of handling high-current loads.'],
        ['**9V Buck-Boost Converter**', 'Provides stable and efficient power regulation for the reaction wheels and buoyancy engine.'],
        ['**BQ25303J Battery Charger**', 'Switch-mode charger used for recharging the robot\u2019s lithium-ion battery cells.'],
        ['**4\u00d7 Samsung 18650 Cells (3500 mAh each)**', 'Wired in parallel to deliver ~14 Ah total capacity, enabling ~18 hours of operation.'],
        ['**Raspberry Pi Zero 2W**', 'Serves as the main controller, offering onboard processing and Wi-Fi communication.'],
      ],
    },
    { type: 'heading', text: 'Assembly and Circuit Board' },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/sphere/sphere-components.png') },
        { source: require('../../assets/img/sphere/circuit-board.png') },
      ],
      caption:
        '**Figure 4.** The model on the left labels all the components of the sphere and on the right, is a 3D model of the printed circuit board designed in KiCAD.',
    },
    { type: 'heading', text: 'Software' },
    {
      type: 'paragraph',
      text: 'All the software for the project is uploaded on github here: https://github.com/TQafko/Watersphere',
    },
  ],
};
