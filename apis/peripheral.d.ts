/** @noSelf */
declare namespace peripheral {
    export function isPresent(side: string): boolean

    export function getType(side: string): string | undefined

    export function getMethods(side: string): string[] | undefined

    export function call(side: string, method: string, ...args: any[]): any

    export function wrap<T>(side: string): T | undefined
    
    export function find<T>(type: string, filter: (name: string, obj: any) => boolean): LuaMultiReturn<[...T[]]>

    export function getNames(): string[]
}