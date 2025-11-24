+++
title = "Float IoT Device"
date = "2024-09-01" 
description = "The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions."
tags = [
    "robot", "water"
]

image = "/img/float/float-3d.png"
+++

## Project Overview

The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions.

## Diagram of Components

<img src="/img/float/diagram-float.png">

## Project Objectives

- Perform vertical underwater profiling semi-autonomously.
- Transmit depth and sensor data in real time to a surface station.
- Control buoyancy precisely using a stepper-motor-driven lead screw and adjustable weights.
- Ensure reliability and safety with waterproof housing and inline current protection.
- Maintain vertical stability through weighted ballast and adjustable syringes.

## Materials and Electronics

<div style="display: flex; align-items: center; justify-content: center;">
  <div style="flex: 1; text-align: center;">
    <img src="/img/float/electronics.jpeg" style="max-width: 70%; border-radius: 20px;">
  </div>
  <div style="flex: 1;">
    <ol style="margin: 0;">
      <li><strong>2.4 GHz Antenna</strong></li>
      <li><strong>MS2958 Pressure Sensor</strong></li>
      <li><strong>Air Pressure Valve</strong></li>
      <li><strong>On/Off Switch</strong></li>
      <li><strong>Electronics Unit (ELEC-NRD-004)</strong></li>
      <li><strong>7.5A Fuse (ELEC-NRD-005)</strong></li>
      <li><strong>NEMA 17 Motor</strong></li>
      <li><strong>Syringe</strong></li>
      <li><strong>Barb Intakes</strong></li>
      <li><strong>O-Ring End Caps (ELEC-NRD-006)</strong></li>
    </ol>
  </div>
</div>

## 3D Design

### Buoyancy Engine
The buoyancy engine is a core component of the float, enabling precise vertical movement in water. It is actuated by a stepper-motor-driven lead screw, which adjusts the buoyancy by extending or retracting internal mechanisms to change the float’s overall density. This allows the device to ascend, descend, or maintain depth semi-autonomously during profiling tasks. Combined with adjustable ballast syringes and steel weights, the buoyancy engine ensures stable vertical orientation, while the waterproof housing and O-ring seals protect the system under water pressures up-to 1 meter depth.

<img src="/img/float/buoyancy-engine.png">

### Mechanics

The waterproofing was achieved using two SLA-printed end caps, which eliminated the surface imperfections typically seen in FDM printing. Each end cap incorporates two silicone O-rings, lubricated every time the capsule is opened to ensure a tight seal. A pressure relief valve at the top allows the float to safely vent built-up internal pressure when submerging to greater depths. The bar intakes were epoxied to the bottom endcap to create a strong seal between the end-cap and end of syringes.

<div style="display: flex; gap: 10px;">
  <img src="/img/float/top-end-cap.jpeg" style="flex: 1; max-width: 32%; height: auto;">
  <img src="/img/float/bottom-end-cap.jpeg" style="flex: 1; max-width: 32%; height: auto;">
  <img src="/img/float/barb-syringe.png" style="flex: 1; max-width: 32%; height: auto;">
</div>
<p><strong>Figure 4. </strong> The first is the top end cap that consists of the 2.4GHz antenna, the rotate switch valve, the pressure sensor, and the pressure relif valve. The middle picture shows the o-rings fitting in the tubing and the bottom of the barb intakes. The right most picture shows how the tubing between the barbs and the syringes is done with small pvc tubing and waterprofed with epoxy.</p>

## Demonstration Video

<div style="display: flex; justify-content: center; align-items: center;">
    <div>
        <iframe width="640" height="360" 
                src="https://www.youtube.com/embed/jgls7owthrA?rel=0&amp;autoplay=1&mute=1" 
                title="Float Demo 2024" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
</div>

<div style="display: flex; justify-content: center;">
  <p style="width: 75%; text-align: center;">
    <strong>Figure 3.</strong> Demonstration of the float in action. When the float is at the surface of the water, it transmits the data it received underwater, mapping pressure and temperature.
  </p>
</div>

## Software

The code was written in both arduino and ESPIDF in C/C++. A front-end typescript interface made html calls to the server in the ESP32 which communicated data when the float was breaking the surface of the water. The data was a json formated file that inlcuded sensors and power levels of the hardware.

The software can be found on <a href="https://github.com/TQafko/Float">github</a> here.