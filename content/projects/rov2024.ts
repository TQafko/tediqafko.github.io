import { Project } from '../types';

export const rov2024: Project = {
  slug: 'rov-2024',
  title: '2024 Underwater Rover',
  date: '2024-09-01',
  description: 'Remotely Operated Vehicle built for the 2024 MATE ROV World Championships',
  tags: ['robot', 'water', 'KiCad', 'SolidWorks', 'ROS', 'Linux'],
  image: require('../../assets/img/rov2024/rov2024.jpg'),
  content: [
    { type: 'heading', level: 1, text: 'Overview' },
    {
      type: 'paragraph',
      text: 'Designed a Remotely Operated Vehicle equipped with cameras, sonar, and environmental sensors for underwater exploration. The system features onboard computing for navigation, data analysis, and communication, along with electric thrusters and robotic arms for movement, object manipulation, and sample collection.',
    },
    {
      type: 'image',
      source: require('../../assets/img/rov2024/rov2024.jpg'),
      caption: '**3D Model Picture** of the 2024 ROV.',
    },
    { type: 'heading', text: 'Goals' },
    { type: 'paragraph', text: 'This underwater vehicle assists in three current initiatives.' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Ocean Observatories Initiative (OOI) to collect and deliver data to better understand the ocean, its complexity, and how it is changing as a result of natural and anthropogenic processes by assisting in the deployment of coastal arrays.',
        'Deployment of Science Monitoring And Reliable Telecommunications (SMART) Cables to collect and transmit temperature, pressure, and seismic acceleration data due to the under-sampled parameters for the deep ocean.',
        'King Abdullah University of Science and Technology\u2019s Red Sea Research Center (KAUST RSRC) in healing diseased coral and promote healthy coral ecosystems using probiotic injection devices and underwater photogrammetry algorithms to assist in the study of coral reefs and their effects in their environments.',
      ],
    },
    { type: 'heading', text: 'Electrical' },
    {
      type: 'paragraph',
      text: 'The ROV\u2019s electrical system is built around a modular backplane architecture that serves as the main connection hub for all onboard electronics. The backplane is a long printed circuit board (PCB) equipped with multiple female ports, enabling easy \u201cplug-and-play\u201d installation of up to six specialized PCB modules. This modular approach enhances mission adaptability, simplifies maintenance, and streamlines troubleshooting.',
    },
    {
      type: 'paragraph',
      text: 'Each connector on the backplane features three ground buses, three 12V buses, one 5V bus, and a GPIO pinout supporting up to 40 signal lines for communication and control. This configuration ensures stable power distribution and reliable data transfer across all modules.',
    },
    {
      type: 'paragraph',
      text: 'Schematics and all PCBs here: https://github.com/TQafko/ROV-Electrical-System',
    },
    { type: 'image', source: require('../../assets/img/rov2024/rov-2024-ee.png'), maxWidth: 600 },
    { type: 'heading', level: 3, text: 'Diagram of Electronics' },
    { type: 'image', source: require('../../assets/img/rov2024/rov-diagram.png') },
    { type: 'heading', level: 3, text: 'Power Management Board' },
    {
      type: 'paragraph',
      text: 'The ROV\u2019s power management board distributes and regulates power across 48V, 12V, and 5V buses. It\u2019s designed to minimize electrical noise and heat near sensitive components, isolate noisy signals, and provide efficient, reliable power delivery with built-in current monitoring for safety.',
    },
    { type: 'image', source: require('../../assets/img/rov2024/power-board-rov.jpeg'), maxWidth: 520 },
    {
      type: 'list',
      items: [
        '**Three voltage rails:** 48V, 12V, and 5V',
        '**Isolated 48V \u2192 12V conversion** to separate noisy and clean grounds',
        '**EMI filter** on 48V input improves signal quality and converter efficiency',
        '**12V \u2192 5V non-isolated conversion** shares common ground',
        '**Power ratings:** 12V \u2013 100A, 5V \u2013 7A',
        '**Hall effect sensors** with onboard ADC (I2C) for current monitoring',
      ],
    },
    { type: 'heading', level: 3, text: 'Thruster Speed Controllers' },
    { type: 'image', source: require('../../assets/img/rov2024/esc.jpeg'), maxWidth: 520 },
    {
      type: 'list',
      items: [
        'Thruster control is managed using **ESCs (Electronic Speed Controllers)** in the ROV.',
        'ESCs generate the necessary **3-phase AC signal** to drive the **T-200 thrusters**.',
        'ESC **PWM input signals** are driven by **two Programmable Counter Arrays (PCAs)**.',
        'The PCAs communicate with the **Jetson Nano via I2C protocol**.',
        'Status lights on the PCAs **indicate real-time functionality**, allowing visualization of any potential issues if the ROV is connected.',
        'The **navigation algorithm commands the required PWM signals** from the PCAs based on **user joystick input**.',
      ],
    },
    { type: 'heading', text: 'Mechanical' },
    {
      type: 'paragraph',
      text: 'The ROV\u2019s mechanical design centers around a modular acrylic tube frame sized to accommodate the electronic assembly, including the upgraded Jetson Nano. The large 20.3 cm diameter tube increases the ROV\u2019s weight and buoyancy but provides ample space for electronics and future modifications. This design allows for flexible arrangement of components, easier testing of prototypes, and improved adaptability compared to a smaller, more constrained frame. Overall, the mechanical structure balances robustness, modularity, and accessibility, supporting both current electronics and potential future upgrades.',
    },
    { type: 'heading', level: 3, text: 'Structure and Frame' },
    { type: 'image', source: require('../../assets/img/rov2024/frame.jpeg') },
    {
      type: 'paragraph',
      text: 'The ROV\u2019s frame is constructed from 6061 aluminum square tubes welded together, replacing the previously used HDPE to improve strength and stability. The TIG-welded aluminum structure supports all major components, including the electronics housing, propellers, sonar, and gripper. 316 stainless steel fasteners secure the components, providing excellent corrosion resistance for reliable operation in saltwater environments. This robust and durable frame forms the backbone of the ROV, ensuring structural integrity and long-term performance.',
    },
    { type: 'heading', level: 3, text: 'Electronics Housing' },
    { type: 'image', source: require('../../assets/img/rov2024/elec-housing.png') },
    {
      type: 'paragraph',
      text: 'The ROV\u2019s electronics are housed in a 20.3 cm diameter, 45.7 cm long acrylic tube with removable aluminum end caps, providing easy access for adjustments and component reuse. The larger diameter allows more space for electronic modules and multiple USB devices. Two front-end cap options are used: a dome cap for a gimbal camera to adjust viewing angles, and a flat cap to reduce light refraction for 3D mapping cameras. The tether cap at the rear secures PCBs, reduces vibration, and houses 26 penetrator holes for connections, including a vacuum test port and Ethernet access. This modular design simplifies assembly, maintenance, and waterproofing.',
    },
    { type: 'heading', level: 3, text: 'Propulsion' },
    { type: 'image', source: require('../../assets/img/rov2024/f-vectors.png'), maxWidth: 600 },
    {
      type: 'paragraph',
      text: 'The ROV uses eight T200 Blue Robotics thrusters. Eight thrusters provide control in 6 degrees of freedom, improving rotation, stability, and accuracy. T200 thrusters are powerful allowing fast movements to complete challenges efficiently, at the cost of higher power consumption (7 A per thruster), which is accommodated by the electrical system. Side thrusters are at 45-degree angles, and vertical thrusters point downward, maintaining symmetry that aids PID control and reduces 3D printing costs for mounts.',
    },
    { type: 'heading', text: 'Software' },
    { type: 'heading', level: 3, text: 'Camera Modules' },
    { type: 'image', source: require('../../assets/img/rov2024/camera-modules.jpeg'), maxWidth: 600 },
    {
      type: 'paragraph',
      text: 'These compact camera modules are built around the Raspberry Pi 2W paired with a Raspberry Pi camera for perception. Three were placed in the ROV and all routed in a PoE switch. Each module features:',
    },
    {
      type: 'list',
      items: [
        'A custom waterproof acrylic casing for underwater durability',
        'A front sealed with clear acrylic glue to maintain optimal lens visibility',
        'A 3D-printed back cap with an O-ring for a secure, watertight seal',
        'Power over Ethernet (PoE) breakout board for efficient power and data transmission through a single cable',
      ],
    },
    {
      type: 'paragraph',
      text: 'This design combines robust protection with easy maintenance and modularity, making it ideal for underwater robotics applications.',
    },
    { type: 'paragraph', text: 'Software repository: https://github.com/WIT-IEEE-MATE-ROV/wurov2' },
    { type: 'heading', text: 'Other Images of ROV' },
    {
      type: 'imageRow',
      images: [
        { source: require('../../assets/img/rov2024/rov-2024-1.png') },
        { source: require('../../assets/img/rov2024/rov_rendering.png') },
      ],
    },
  ],
};
