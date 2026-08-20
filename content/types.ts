import { ImageSourcePropType } from 'react-native';

/**
 * A single piece of page content. Pages are written as arrays of these
 * blocks, which keeps adding new projects/research entries as simple as
 * writing a small data file (no layout code needed).
 *
 * Text supports **bold** markers and bare URLs are auto-linked.
 */
export type ContentBlock =
  | { type: 'heading'; text: string; level?: 1 | 2 | 3 }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; source: ImageSourcePropType; caption?: string; maxWidth?: number }
  | { type: 'imageRow'; images: { source: ImageSourcePropType; label?: string }[]; caption?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'youtube'; videoId: string; caption?: string }
  | { type: 'video'; uri: string; caption?: string }
  | { type: 'link'; label: string; url: string };

export interface Project {
  /** Used in the URL, e.g. /projects/rov-2024 */
  slug: string;
  title: string;
  /** ISO date, used to sort newest-first on the home page */
  date: string;
  description: string;
  tags: string[];
  /** Thumbnail shown on the projects grid */
  image: ImageSourcePropType;
  content: ContentBlock[];
}

export interface Publication {
  year: number;
  image: ImageSourcePropType;
  /** Title of the paper/research */
  title: string;
  /** Where and when it was published, shown as the subtitle */
  venue: string;
  /** Short description of what the work is about */
  description: string;
  /** Link to find the publication online (DOI or similar) */
  url: string;
  /** Label for the link, defaults to "Find it online" */
  urlLabel?: string;
}
