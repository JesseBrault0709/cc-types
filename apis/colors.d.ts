/** @noSelfInFile */

declare namespace colors {
    /**
     * Combines one or more colors (or sets of colors)
     * into a larger set.
     */
    export function combine(...colors: number[]): number

    /**
     * Removes one or more colors (or sets of colors)
     * from an initial set.
     */
    export function subtract(colorSet: number, ...colors: number[]): number

    /**
     * Tests whether color is contained within colors.
     */
    export function test(colorSet: number, color: number): boolean
}

declare enum colors {
    white = 1,
    orange = 2,
    magenta = 4,
    lightBlue = 8,
    yellow = 16,
    lime = 32,
    pink = 64,
    gray = 128,
    lightGray = 256,
    cyan = 512,
    purple = 1024,
    blue = 2048,
    brown = 4096,
    green = 8192,
    red = 16384,
    black = 32768
}
