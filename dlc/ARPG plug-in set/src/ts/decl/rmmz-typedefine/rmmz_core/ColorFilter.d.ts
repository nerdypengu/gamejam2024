/**
 * The color filter for WebGL.
 *
 * @class
 * @extends PIXI.Filter
 */
declare class ColorFilter extends PIXI.Filter {
    constructor(...args: any[]);
    initialize(): void;
    /**
     * Sets the hue rotation value.
     *
     * @param {number} hue - The hue value (-360, 360).
     */
    setHue(hue: number): void;
    /**
     * Sets the color tone.
     *
     * @param {array} tone - The color tone [r, g, b, gray].
     */
    setColorTone(tone: ColorType): void;
    /**
     * Sets the blend color.
     *
     * @param {array} color - The blend color [r, g, b, a].
     */
    setBlendColor(color: ColorType): void;
    /**
     * Sets the brightness.
     *
     * @param {number} brightness - The brightness (0 to 255).
     */
    setBrightness(brightness: number): void;
    _fragmentSrc(): string;
}
