/** @noSelfInFile */

declare module redstone {
    export function getSides(): string[]
    export function getInput(side: string): boolean
    export function setOutput(side: string, value: boolean): void
    export function getOutput(side: string): boolean
    export function getAnalogInput(side: string): number
    export function setAnalogOutput(side: string, strength: number): void
    export function getAnalogOutput(side: string): number
    export function getBundledInput(side: string): number
    export function getBundledOutput(side: string): number
    export function setBundledOutput(side: string, colors: number): void
    export function testBundledInput(side: string, color: number): boolean
}

declare module rs {
    export function getSides(): string[]
    export function getInput(side: string): boolean
    export function setOutput(side: string, value: boolean): void
    export function getOutput(side: string): boolean
    export function getAnalogInput(side: string): number
    export function setAnalogOutput(side: string, strength: number): void
    export function getAnalogOutput(side: string): number
    export function getBundledInput(side: string): number
    export function getBundledOutput(side: string): number
    export function setBundledOutput(side: string, colors: number): void
    export function testBundledInput(side: string, color: number): boolean
}