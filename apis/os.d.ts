/** @noSelfInFile */

declare namespace os {
    export function version(): string
    export function getComputerID(): number
    export function getComputerLabel(): string | undefined
    export function setComputerLabel(label?: string): void
    export function run(environment: any, programPath: string, arguments?: string): boolean
    export function loadAPI(path: string): boolean
    export function unloadAPI(name: string): void
    export function pullEvent(targetEvent?: string): LuaMultiReturn<[event: string, ...params: unknown[]]>
    export function pullEventRaw(targetEvent?: string): LuaMultiReturn<[event: string, ...params: unknown[]]>
    export function queueEvent(event: string, ...params: any[]): void
    export function startTimer(timeout: number): number
    export function cancelTimer(timerID: number): void
    export function sleep(time: number): void
    export function day(): number
    export function setAlarm(time: number): number
    export function cancelAlarm(alarmID: number): void
    export function shutdown(): void
    export function reboot(): void
}