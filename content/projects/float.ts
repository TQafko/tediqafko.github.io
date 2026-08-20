import { Project } from '../types';

export const float: Project = {
  slug: 'float',
  title: 'Float IoT Device',
  date: '2024-09-01',
  description:
    'The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions.',
  tags: ['robot', 'water', 'esp32', 'control'],
  image: require('../../assets/img/float/float-3d.png'),
  content: [
    { type: 'heading', text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions.',
    },
    { type: 'heading', text: 'Diagram of Components' },
    {
      type: 'image',
      source: require('../../assets/img/float/diagram-float.png'),
      caption:
        '**Figure 1.** Diagram of electronics using a ESP32 as the main controller unit, a real time clock sensor for keeping timestamps, pressure sensors to measure depth in water, stepper motor and controller, an antenna, and alkeline batteries.',
    },
    { type: 'heading', text: 'Project Objectives' },
    {
      type: 'list',
      items: [
        'Perform vertical underwater profiling semi-autonomously.',
        'Transmit depth and sensor data in real time to a surface station.',
        'Control buoyancy precisely using a stepper-motor-driven lead screw and adjustable weights.',
        'Ensure reliability and safety with waterproof housing and inline current protection.',
        'Maintain vertical stability through weighted ballast and adjustable syringes.',
      ],
    },
    { type: 'heading', text: 'Materials and Electronics' },
    {
      type: 'image',
      source: require('../../assets/img/float/electronics.jpeg'),
      maxWidth: 480,
      caption: '**Figure 2.** Electronics Housing.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**2.4 GHz Antenna**',
        '**MS2958 Pressure Sensor**',
        '**Air Pressure Valve**',
        '**On/Off Switch**',
        '**Electronics Unit (ELEC-NRD-004)**',
        '**7.5A Fuse (ELEC-NRD-005)**',
        '**NEMA 17 Motor**',
        '**Syringe**',
        '**Barb Intakes**',
        '**O-Ring End Caps (ELEC-NRD-006)**',
      ],
    },
    { type: 'heading', text: '3D Design' },
    { type: 'heading', level: 3, text: 'Buoyancy Engine' },
    {
      type: 'paragraph',
      text: 'The buoyancy engine is a core component of the float, enabling precise vertical movement in water. It is actuated by a stepper-motor-driven lead screw, which adjusts the buoyancy by extending or retracting internal mechanisms to change the float\u2019s overall density. This allows the device to ascend, descend, or maintain depth semi-autonomously during profiling tasks. Combined with adjustable ballast syringes and steel weights, the buoyancy engine ensures stable vertical orientation, while the waterproof housing and O-ring seals protect the system under water pressures up-to 1 meter depth.',
    },
    {
      type: 'image',
      source: require('../../assets/img/float/buoyancy-engine.png'),
      caption: '**Figure 3.** Image of the buoyancy engine',
    },
    { type: 'heading', level: 3, text: 'Mechanics' },
    {
      type: 'paragraph',
      text: 'The waterproofing was achieved using two SLA-printed end caps, which eliminated the surface imperfections typically seen in FDM printing. Each end cap incorporates two silicone O-rings, lubricated every time the capsule is opened to ensure a tight seal. A pressure relief valve at the top allows the float to safely vent built-up internal pressure when submerging to greater depths. The bar intakes were epoxied to the bottom endcap to create a strong seal between the end-cap and end of syringes.',
    },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/float/top-end-cap.jpeg') },
        { source: require('../../assets/img/float/bottom-end-cap.jpeg') },
        { source: require('../../assets/img/float/barb-syringe.png') },
      ],
      caption:
        '**Figure 4.** The first is the top end cap that consists of the 2.4GHz antenna, the rotate switch valve, the pressure sensor, and the pressure relief valve. The middle picture shows the o-rings fitting in the tubing and the bottom of the barb intakes. The right most picture shows how the tubing between the barbs and the syringes is done with small pvc tubing and waterproofed with epoxy.',
    },
    { type: 'heading', text: 'Demonstration Video' },
    {
      type: 'youtube',
      videoId: 'jgls7owthrA',
      caption:
        '**Figure 5.** Demonstration of the float in action. When the float is at the surface of the water, it transmits the data it received underwater, mapping pressure and temperature.',
    },
    { type: 'heading', text: 'Software' },
    {
      type: 'paragraph',
      text: 'The code was written in both arduino and ESPIDF in C/C++. A front-end typescript interface made html calls to the server in the ESP32 which communicated data when the float was breaking the surface of the water. The data was a json formated file that included sensors and power levels of the hardware.',
    },
    { type: 'paragraph', text: 'The software can be found on github here: https://github.com/TQafko/Float' },
  ],
};
