// Type definitions for @phoseinq/mazeqr

export interface MazeQrOptions {
  /** true / false fixes the theme; leave it out to follow <html data-theme="dark"> and cross-fade when it changes. */
  night?: boolean;
  /** Draw one frame and stop. */
  still?: boolean;
  /** Animate even when the system asks for reduced motion. */
  motion?: boolean;
  /** Frame rate of the animation (default 30). */
  fps?: number;
  /** Start the simulation this many seconds in, for repeatable stills. */
  time?: number;
  /** false removes the people and the monster. */
  characters?: boolean;
  /** false removes the trees, benches and other props. */
  props?: boolean;
  /** The icon variant: no garden, a one-module margin. */
  thumb?: boolean;
  /** With thumb: a small live view of `mods` modules round the monster, `size` pixels square. */
  lens?: { mods: number; size: number };
  debug?: {
    showReservedModules?: boolean;
    showSafeCores?: boolean;
    showConnectivity?: boolean;
    showModuleGrid?: boolean;
    hideArtwork?: boolean;
  };
}

export interface MazeQrCanvas extends HTMLCanvasElement {
  /** Pause the animation. */
  __stop(): void;
  /** Resume it. */
  __start(): void;
}

/** A size × size canvas showing `text` as a living maze, or null if the text is too long for a QR code. */
export function renderArtisticQr(text: string, size: number, options?: MazeQrOptions): MazeQrCanvas | null;

/** Plays the "link copied" reaction on every canvas showing `text`. */
export function mazeCheer(text: string): void;

/** Checks that every module's centre is within its bit's tone; `bad` is the number of cores out of tone. */
export function verifyCores(canvas: HTMLCanvasElement, ratio?: number): { bad: number; worst: number };

/** Every tunable: error correction, quiet zone, colours, number of people, speeds… */
export const MAZE: Record<string, unknown>;

/** The bundled qrcode-generator 1.4.4. */
export const qrcode: unknown;
