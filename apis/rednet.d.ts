/** @noSelfInFile */

declare module rednet {
    export function open(side: string): void
    export function close(side: string): void
    export function send(receiverID: number, message: any, protocol?: string): void
    export function broadcast(message: any, protocol?: string): void
    export function receive(protocolFilter?: string, timeout?: number): [senderID: number, message: any, protocol: string]
    export function isOpen(side: string): boolean
    export function host(protocol: string, hostname: string): void
    export function unhost(protocol: string, hostname: string): void
    export function lookup(protocol: string, hostname?: string): [...ids: number[]]
    export function run(): void
}