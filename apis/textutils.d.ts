/** @noSelf */
declare namespace textutils {
    export function formatTime(time: number, twentyFourHour?: boolean): string
    export function serialize(data: any): string
    export function unserialize<T>(serializedData: string): T
}
