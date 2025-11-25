+++
author = "Tedi Qafko"
title = "Object Tracking Sphere"
date = "2019-03-05"
description = "A spherical autonomous robot designed for low-cost freshwater monitoring, integrating reaction-wheel actuation, a buoyancy engine, and a modular sensor suite for real-time environmental data collection."
tags = ["robot", "water", "IoT", "SolidWorks", "Network"]
image = "/img/watersphere.png"
+++

# Overview

A spherical autonomous robot designed for low-cost freshwater monitoring, integrating reaction-wheel actuation, a buoyancy engine, and a modular sensor suite for real-time environmental data collection.

<div style="display: flex; justify-content: center; align-items: center;">
  <video 
    width="100%" 
    autoplay 
    loop 
    muted 
    playsinline 
    style="max-width: 100%; width: 100%;"
  >
    <source src="/img/sphere/reaction-wheel1.mp4" type="video/mp4">
  </video>
</div>

<p><strong>Figure 1.</strong> A prototype assembly of one of the components in the robot called a reaction wheel. Uses angular momentum to orient the sphere. Two of these on the sphere control 3 degrees of freedom</p>


<div style="display: flex; justify-content: center; align-items: center; gap: 30px; padding: 10px 0;">
    <img src="/img/sphere_together_assembled.png" style="width: 30%; max-width: 350px;">
    <!-- Arrow from Heroicons -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width: 60px; height: 60px;">>
    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <img src="/img/sphere_assembly.png" style="width: 30%; max-width: 350px;">
</div>

<p><strong>Figure 2.</strong> The models above were designed and rendered in SolidWorks.</p>

## Project Objectives

- Design an autonomous spherical robot for underwater and surface navigation.
- Implement reaction-wheel and buoyancy propulsion for precise movement.
- Integrate sensors to monitor key water-quality parameters in real time.
- Ensure a compact, waterproof, and energy-efficient design for extended operation.

## Diagram of Electronics

<img src="/img/sphere/diagram.png">
<p><strong>Figure 2.</strong> The diagram above captures the computer station running a flask software for communication, the main control unit with all the sensors and control logic, the power distribution, motor controllers, and buoyancy engine.</p>


## Hardware used
Below is a table for all the components that were used to build this sphere.
<div style="padding-left: 30px; padding-right: 30px;">

| **Component**                              | **Description**                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **GT-U7 GPS Module**                       | Provides global positioning data for navigation and locating the robot in aquatic environments. |
| **ADS1115 16-bit ADC**                     | 4-channel ADC converter used for accurate measurement of analog sensor inputs. |
| **BN008 IMU**                              | Supplies orientation, acceleration, and angular velocity data for stable underwater movement.   |
| **L298N H-Bridge Motor Driver**            | Controls the reaction wheels and buoyancy engine, capable of handling high-current loads.       |
| **9V Buck-Boost Converter**                | Provides stable and efficient power regulation for the reaction wheels and buoyancy engine.     |
| **BQ25303J Battery Charger**               | Switch-mode charger used for recharging the robot’s lithium-ion battery cells.                  |
| **4× Samsung 18650 Cells (3500 mAh each)** | Wired in parallel to deliver ~14 Ah total capacity, enabling ~18 hours of operation.            |
| **Raspberry Pi Zero 2W**                   | Serves as the main controller, offering onboard processing and Wi-Fi communication.             |

</div>

## Assembly and Circuit Board

<div style="display: flex; justify-content: center; align-items: center; gap: 30px;">
    <img src="/img/sphere/sphere-components.png" style="width: 60%; max-width: 900px;">
    <img src="/img/sphere/circuit-board.png"style="width: 40%; max-width: 370px;">
</div>

<p><strong>Figure 3.</strong> The model on the left labels all the components of the sphere and on the right, is a 3D model of the printed circuit board designed in KiCAD.</p>

## Software

All the software for the project is uploaded on <a href= "https://github.com/TQafko/Watersphere?tab=readme-ov-file">github</a>  here 