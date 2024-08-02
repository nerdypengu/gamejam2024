/**
 * The sprite object for a tiling image.
 *
 * @class
 * @extends PIXI.TilingSprite
 * @param {Bitmap} bitmap - The image for the tiling sprite.
 */
declare class TilingSprite extends PIXI.TilingSprite {
    protected _bitmap?: Bitmap;
    protected _width: number;
    protected _height: number;
    protected _frame: Rectangle;
    origin: Point;
    constructor(bitmap?: Bitmap);
    initialize(...args: any[]): void;
    static _emptyBaseTexture: any;
    /**
     * The image for the tiling sprite.
     *
     * @type Bitmap
     * @name TilingSprite#bitmap
     */
    get bitmap(): Bitmap | undefined;
    set bitmap(value: Bitmap | undefined);
    /**
     * The opacity of the tiling sprite (0 to 255).
     *
     * @type number
     * @name TilingSprite#opacity
     */
    get opacity(): number;
    set opacity(value: number);
    /**
     * Destroys the tiling sprite.
     */
    destroy(): void;
    /**
     * Updates the tiling sprite for each frame.
     */
    update(): void;
    /**
     * Sets the x, y, width, and height all at once.
     *
     * @param {number} x - The x coordinate of the tiling sprite.
     * @param {number} y - The y coordinate of the tiling sprite.
     * @param {number} width - The width of the tiling sprite.
     * @param {number} height - The height of the tiling sprite.
     */
    move(x: number, y: number, width: number, height: number): void;
    /**
     * Specifies the region of the image that the tiling sprite will use.
     *
     * @param {number} x - The x coordinate of the frame.
     * @param {number} y - The y coordinate of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    setFrame(x: number, y: number, width: number, height: number): void;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    _onBitmapChange(): void;
    _onBitmapLoad(): void;
    _refresh(): void;
}
