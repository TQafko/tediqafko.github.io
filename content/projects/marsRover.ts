import { Project } from '../types';

export const marsRover: Project = {
  slug: 'mars-rover',
  title: 'Mars Rover',
  date: '2024-01-01',
  description:
    'A semi-autonomous MARS Rover with advanced suspension and remote sensing, designed to traverse rugged terrain and explore challenging environments.',
  tags: ['robot', '3dcad', 'Solidworks'],
  image: require('../../assets/img/mars-rover/rovoer_2.jpg'),
  content: [
    { type: 'heading', text: 'Overview' },
    {
      type: 'paragraph',
      text: 'This project focuses on designing a MARS Rover with a rocker-bogie suspension system to navigate obstacles on the Martian surface. It features LORA-based communication to a computer station via a drone, allowing semi-autonomous control using GPS, LiDAR, cameras, and IMU sensors. Future developments include a robotic manipulator with kinematic control, integrating rover locomotion with rotational joints to manipulate objects in its environment.',
    },
    { type: 'image', source: require('../../assets/img/mars-rover/rover.jpg'), maxWidth: 680 },
    { type: 'heading', text: 'Images of Various Systems Designed' },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/mars-rover/boggies-design.png') },
        { source: require('../../assets/img/mars-rover/wheels-rovoer.jpg') },
        { source: require('../../assets/img/mars-rover/rover_boogie.gif') },
      ],
    },
  ],
};
