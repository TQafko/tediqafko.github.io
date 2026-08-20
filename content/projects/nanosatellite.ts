import { Asset } from 'expo-asset';
import { Project } from '../types';

const epsSlidesUri = Asset.fromModule(
  require('../../assets/img/nanosat/pico-eps.pdf'),
).uri;

export const nanosatellite: Project = {
  slug: 'nanosatellite',
  title: '1P Nano Satellite',
  date: '2021-10-01',
  description:
    'A work-in-progress 1P PocketQube Earth observation satellite pushing the limits of miniaturization. It integrates advanced image sensors and commercial off-the-shelf components, with an embedded magnetorquer-based ADCS to precisely control camera pointing for high-quality Earth imaging.',
  tags: ['satellite', 'space', 'stm32', 'KiCad', 'Altium'],
  image: require('../../assets/img/nanosat/sat.png'),
  content: [
    { type: 'heading', text: 'Overview' },
    {
      type: 'paragraph',
      text: 'A work-in-progress 1P PocketQube Earth observation satellite pushing the limits of miniaturization. It integrates advanced image sensors and commercial off-the-shelf components, with an embedded magnetorquer-based ADCS to precisely control camera pointing for high-quality Earth imaging.',
    },
    { type: 'heading', text: 'Objectives' },
    {
      type: 'list',
      items: [
        'Design a compact 5 cm cube satellite for low-Earth orbit operations.',
        'Capture high-quality images at an altitude of approximately 600 km.',
        'Ensure satellite operational lifespan of at least 2 years.',
        'Enable reliable bilateral communication between the satellite and the ground station.',
      ],
    },
    {
      type: 'image',
      source: require('../../assets/img/nanosat/sat.png'),
      maxWidth: 600,
      caption:
        '**Figure 1.** The latest design of the satellite consists of five solar panel PCBs that fit together to form the satellite\u2019s structure. The electronics fit tightly inside, including the flight board at the top, the communications board in the middle, and the power management board at the bottom. The bottom plate is a mounting PCB designed to fit inside rocker launchers for 1P satellites, featuring two switches that enable power to the satellite when launched from the rocket.',
    },
    {
      type: 'image',
      source: require('../../assets/img/nanosat/sat.jpg'),
      maxWidth: 600,
      caption:
        '**Figure 2.** The team worked closely with Nepali Orion Space to learn about satellites. This is the Nepali Orion pico satellite that we used to understand the development and requirements of nanosatellites. It consists of a communications board at the top, a payload board with pressure and IMU sensors, a flight controller board using an ATmega328P, and a power management board.',
    },
    { type: 'heading', text: 'PCB Designs' },
    {
      type: 'paragraph',
      text: 'Various software was used to design the PCBs. KiCad and Altium were the main PCB platforms used to set up schematics, layouts, and 3d models of the satellite. The team would collaborate using google drive and github to share designs together. Below are two pcbs, one is the power management board that converts 3.3V, 5V, and 1.8V managing the solar energy on the way. The second board is the embedded stm32 board that contains the interfaces for cameras, sensors, and GPIO for testing.',
    },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/nanosat/solar-charger-3d.png'), label: '3D Model (Solar Charger)' },
        { source: require('../../assets/img/nanosat/solar-charger-layout.png'), label: 'Layout (Solar Charger)' },
        { source: require('../../assets/img/nanosat/solar-charger-schematic.png'), label: 'Schematic (Solar Charger)' },
      ],
    },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/nanosat/proto-board.png'), label: '3D Model (STM32 Board)' },
        { source: require('../../assets/img/nanosat/proto-board-layout.png'), label: 'Layout (STM32 Board)' },
      ],
    },
    { type: 'heading', text: 'Electrical Power System & Initial Solar Cell Layouts' },
    { type: 'link', label: 'Open the Electrical Power System slides (PDF)', url: epsSlidesUri },
  ],
};
