+++
title = "Float IoT Device"
date = "2024-09-01" 
description = "The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions."
tags = ["robot", "water","esp32","control"]
image = "/img/float/float-3d.png"
+++
<style>
  .float-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .float-image {
    flex: 1;
    text-align: center;
  }

  .float-image img {
    max-width: 70%;
    border-radius: 20px;
  }

  .float-list {
    flex: 1;
  }

  /* Mobile layout: stack vertically */
  @media (max-width: 768px) {
    .float-wrap {
      flex-direction: column;
      text-align: center;
    }

    .float-image img {
      max-width: 100%;
    }

    .float-list {
      width: 100%;
      text-align: left;
    }
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    max-width: 900px; 
    margin: 0 auto;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>


## Project Overview

The float is a semi-autonomous underwater device designed to quickly profile aquatic environments while sending real-time depth data to a surface station. Its compact waterproof housing, adjustable ballast, and stepper-driven buoyancy system make it both precise and robust for variable underwater conditions.


## Diagram of Components

<img src="/img/float/diagram-float.png" width="100%">
<strong>Figure 1.</strong> Diagram of electronics using a ESP32 as the main controller unit, a real time clock sensor for keeping timestamps, pressure sensors to measure depth in water, stepper motor and controller, an antenna, and alkeline batteries.


## Project Objectives

- Perform vertical underwater profiling semi-autonomously.
- Transmit depth and sensor data in real time to a surface station.
- Control buoyancy precisely using a stepper-motor-driven lead screw and adjustable weights.
- Ensure reliability and safety with waterproof housing and inline current protection.
- Maintain vertical stability through weighted ballast and adjustable syringes.


## Materials and Electronics

<div class="float-wrap">
  <div class="float-image" style="text-align:left;">
    <img src="/img/float/electronics.jpeg">
    <strong>Figure 2.</strong> Electronics Housing.
  </div>

  <div class="float-list">
    <ol style="margin: 0; padding-left: 20px;">
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
<div style="text-align:center;">
  <strong>Figure 3.</strong> Image of the buoyancy engine
</div>
### Mechanics

The waterproofing was achieved using two SLA-printed end caps, which eliminated the surface imperfections typically seen in FDM printing. Each end cap incorporates two silicone O-rings, lubricated every time the capsule is opened to ensure a tight seal. A pressure relief valve at the top allows the float to safely vent built-up internal pressure when submerging to greater depths. The bar intakes were epoxied to the bottom endcap to create a strong seal between the end-cap and end of syringes.

<div style="display: flex; gap: 10px;">
  <img src="/img/float/top-end-cap.jpeg" style="flex: 1; max-width: 32%; height: auto;">
  <img src="/img/float/bottom-end-cap.jpeg" style="flex: 1; max-width: 32%; height: auto;">
  <img src="/img/float/barb-syringe.png" style="flex: 1; max-width: 32%; height: auto;">
</div>
<p><strong>Figure 4. </strong> The first is the top end cap that consists of the 2.4GHz antenna, the rotate switch valve, the pressure sensor, and the pressure relif valve. The middle picture shows the o-rings fitting in the tubing and the bottom of the barb intakes. The right most picture shows how the tubing between the barbs and the syringes is done with small pvc tubing and waterprofed with epoxy.</p>


## Demonstration Video

<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/jgls7owthrA?rel=0&autoplay=1&mute=1"
    title="Float Demo 2024"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<div style="display: flex; justify-content: center;">
  <p style="width: 100%; text-align: center;">
    <strong>Figure 3.</strong> Demonstration of the float in action. When the float is at the surface of the water, it transmits the data it received underwater, mapping pressure and temperature.
  </p>
</div>


## Software

The code was written in both arduino and ESPIDF in C/C++. A front-end typescript interface made html calls to the server in the ESP32 which communicated data when the float was breaking the surface of the water. The data was a json formated file that inlcuded sensors and power levels of the hardware.

The software can be found on <a href="https://github.com/TQafko/Float">github</a> here.