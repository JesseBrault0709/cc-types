/** @noSelfInFile */

/** @noSelf */
declare interface Term {
    write(text: string): void
    
    blit(text: string, textColors: string, backgroundColors: string): void

    clear(): void

    clearLine(): void

    getCursorPos(): LuaMultiReturn<[x: number, y: number]>
    
    setCursorPos(x: number, y: number): void

    setCursorBlink(blink: boolean): void

    isColor(): boolean

    getSize(): LuaMultiReturn<[x: number, y: number]>

    scroll(lines: number): void

    current(): Term
    
    redirect(target: Term): Term

    native(): Term

    setTextColor(color: colors): void

    getTextColor(): number

    setBackgroundColor(color: colors): void

    getBackgroundColor(): number

}

declare const term: Term

/** @noSelf */
declare interface Monitor extends Term {

    setTextScale(scale: number): void

}

/** @noSelf */
declare interface Window extends Term {

    setVisible(visiblity: boolean): void

    redraw(): void

    restoreCursor(): void

    getPosition(): LuaMultiReturn<[x: number, y: number]>

    reposition(x: number, y: number, width?: number, height?: number): void

}

/** @noSelf */
declare namespace window {

    export function create(
        parent: Term, 
        x: number, 
        y: number,
        width: number,
        height: number,
        visible?: boolean
    ): Window

}