import { Project } from '../types';
import { balancingRobot } from './balancingRobot';
import { droneshow } from './droneshow';
import { float } from './float';
import { marsRover } from './marsRover';
import { nanosatellite } from './nanosatellite';
import { rov2024 } from './rov2024';
import { sphere } from './sphere';

/**
 * All projects on the site, newest first.
 *
 * To add a project:
 *   1. Create a new file in this folder (copy an existing one as a template).
 *   2. Put its images under assets/img/<project-name>/.
 *   3. Import it below and add it to this list.
 * It will automatically appear on the home page grid and in the sidebar.
 */
export const projects: Project[] = [
  rov2024,
  float,
  marsRover,
  balancingRobot,
  droneshow,
  nanosatellite,
  sphere,
].sort((a, b) => b.date.localeCompare(a.date));
