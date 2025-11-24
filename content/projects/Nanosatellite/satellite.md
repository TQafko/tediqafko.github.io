+++
author = "Tedi Qafko"
title = "1P Nano Satellite"
date = "2021-10-01"
description = "A work-in-progress 1P PocketQube Earth observation satellite pushing the limits of miniaturization. It integrates advanced image sensors and commercial off-the-shelf components, with an embedded magnetorquer-based ADCS to precisely control camera pointing for high-quality Earth imaging."
tags = [
    "satellite", "space"
]
image = "/tediqafko.github.io/img/nanosat/sat.png"
+++

## Overview 

A work-in-progress 1P PocketQube Earth observation satellite pushing the limits of miniaturization. It integrates advanced image sensors and commercial off-the-shelf components, with an embedded magnetorquer-based ADCS to precisely control camera pointing for high-quality Earth imaging.

## Objectives

- Design a compact 5 cm cube satellite for low-Earth orbit operations.
- Capture high-quality images at an altitude of approximately 600 km.
- Ensure satellite operational lifespan of at least 2 years.
- Enable reliable bilateral communication between the satellite and the ground station.

<img src="/tediqafko.github.io/img/nanosat/sat.png" width="80%">

<p><strong>Figure 1.</strong> The latest design of the satellite consists of five solar panel PCBs that fit together to form the satellite’s structure. The electronics fit tightly inside, including the flight board at the top, the communications board in the middle, and the power management board at the bottom. The bottom plate is a mounting PCB designed to fit inside rocker launchers for 1P satellites, featuring two switches that enable power to the satellite when launched from the rocket.</p>
<img src="/tediqafko.github.io/img/nanosat/sat.jpg" width="80%">
<p><strong>Figure 2. </strong> The team worked closely with Nepali Orion Space to learn about satellites. This is the Nepali Orion pico satellite that we used to understand the development and requirements of nanosatellites. It consists of a communications board at the top, a payload board with pressure and IMU sensors, a flight controller board using an ATmega328P, and a power management board. </p>


## PCB Designs

Various software was used to design the PCBs. KiCad and Altium were the main PCB platforms used to set up schematics. layouts, and 3d models of the satellite. The team would collaborate using google drive and github to share designs together. Below are two pcbs, one is the power management board that converts 3.3V, 5V, and 1.8V managing the solar energy on the way. The second board is the embedded stm32 board that contains the interfaces for cameras, sensors, and GPIO for testing.


<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">

  <div style="flex: 1 1 30%; text-align: center;">
    <p><strong>3D Model (Solar Charger)</strong></p>
    <img src="/tediqafko.github.io/img/nanosat/solar-charger-3d.png" alt="Image 1" style="max-width: 100%; height: auto; border-radius: 6px;">
  </div>

  <div style="flex: 1 1 30%; text-align: center;">
    <p><strong> Layout (Solar Charger)</strong></p>
    <img src="/tediqafko.github.io/img/nanosat/solar-charger-layout.png" alt="Image 2" style="max-width: 100%; height: auto; border-radius: 6px;">
  </div>

  <div style="flex: 1 1 30%; text-align: center;">
    <p><strong>Schematic (Solar Charger)</strong></p>
    <img src="/tediqafko.github.io/img/nanosat/solar-charger-schematic.png" alt="Image 3" style="max-width: 100%; height: auto; border-radius: 6px;">
  </div>

  <div style="flex: 1 1 45%; text-align: center;">
    <p><strong>3D Model (STM32 Board)</strong></p>
    <img src="/tediqafko.github.io/img/nanosat/proto-board.png" alt="Image 4" style="max-width: 100%; height: auto; border-radius: 6px;">
  </div>

  <div style="flex: 1 1 45%; text-align: center;">
    <p><strong>Layout (STM32 Board)</strong></p>
    <img src="/tediqafko.github.io/img/nanosat/proto-board-layout.png" alt="Image 5" style="max-width: 100%; height: auto; border-radius: 6px;">
  </div>

</div>


## Electrical Power System & Inital Solar Cell Layouts
<embed src="/tediqafko.github.io/img/nanosat/pico-eps.pdf" type="application/pdf" width="100%" height="600px" title="Embedded PDF Viewer" />