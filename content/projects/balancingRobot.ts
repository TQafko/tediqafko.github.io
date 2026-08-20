import { Project } from '../types';

export const balancingRobot: Project = {
  slug: 'balancing-robot',
  title: 'Balancing Robot',
  date: '2023-09-01',
  description:
    'A self-balancing robot that stabilizes itself like a reverse pendulum, using real-time PID control to stay upright and adapt to disturbances.',
  tags: ['robot', 'ardunio', 'control', 'bluetooth'],
  image: require('../../assets/img/balancing/balancing_bot.png'),
  content: [
    { type: 'heading', text: 'Overview' },
    {
      type: 'paragraph',
      text: 'This project is a self-balancing robot based on the reverse pendulum model and a PID control system. A calibration button lets the robot automatically determine its balance point, which it then maintains by correcting for disturbances like friction, impacts, or uneven surfaces. Future development will add two-wheel XY movement and expand the robot\u2019s ability to navigate challenging terrain such as rocks, stairs, and inclines.',
    },
    {
      type: 'image',
      source: require('../../assets/img/balancing/two_wheel_robot.gif'),
      maxWidth: 380,
    },
    { type: 'heading', text: 'Materials' },
    {
      type: 'list',
      items: [
        'Microcontroller Arduino Nano',
        'IMU sensor MPU6050',
        'Bluetooth module HC-05',
        'Motor driver TMC209',
        'Two NEMA17 stepper motors',
        'Battery pack 3s 12.1V',
        'Chassis frame',
        'Push button',
        'Wiring and mounts',
      ],
    },
    { type: 'heading', text: 'Electronics Module Images' },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/balancing/wheel_rob_3d.jpg') },
        { source: require('../../assets/img/balancing/electronics.jpg') },
        { source: require('../../assets/img/balancing/soldering.jpg') },
      ],
    },
  ],
};
