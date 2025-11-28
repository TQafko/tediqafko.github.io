+++
title = "Balancing Robot"
date = "2023-09-01" 
description = "A self-balancing robot that stabilizes itself like a reverse pendulum, using real-time PID control to stay upright and adapt to disturbances."
tags = ["robot","ardunio","control", "bluetooth"]
image = "/img/balancing/balancing_bot.png"
+++

## Overview

This project is a self-balancing robot based on the reverse pendulum model and a PID control system. A calibration button lets the robot automatically determine its balance point, which it then maintains by correcting for disturbances like friction, impacts, or uneven surfaces. Future development will add two-wheel XY movement and expand the robot’s ability to navigate challenging terrain such as rocks, stairs, and inclines.

<div style="display:flex; justify-content:center; align-items:center;">
  <img src="/img/balancing/two_wheel_robot.gif" width="40%">
</div>

## Materials

- Microcontroller Arduino Nano
- IMU sensor MPU6050
- Bluetooth module HC-05
- Motor driver TMC209
- Two NEMA17 stepper motors
- Battery pack 3s 12.1V
- Chassis frame
- Push button
- Wiring and mounts

## Electronics Module Images

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
  <img src="/img/balancing/wheel_rob_3d.jpg" style="width: 31%; object-fit: cover;">
  <img src="/img/balancing/electronics.jpg" style=" width: 31%; object-fit: cover;">
  <img src="/img/balancing/soldering.jpg" style=" width: 31%; object-fit: cover;">
</div>
