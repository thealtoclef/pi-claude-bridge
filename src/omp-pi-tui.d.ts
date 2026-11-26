// omp >= 19.2 serves its reactive pi-tui to extensions; only the text helper the
// renderers use is declared here (see omp docs/extensions.md#migrating-from-pi-tui).
declare module "@oh-my-pi/pi-tui/text/width" {
	/** Wrap ANSI-styled text to `width` cells per row; `\n` ends a row. */
	export function wrap(text: string, width: number): string[];
}
