/** @noSelfInFile */

declare type FileMode = 'r' | 'w' | 'a' | 'rb' | 'wb' | 'ab'

declare type FileHandle<M extends FileMode> = M extends 'r'
    ? FileHandleR
    : M extends 'w' | 'a'
    ? FileHandleWA
    : M extends 'rb'
    ? FileHandleRB
    : M extends 'wb' | 'ab'
    ? FileHandleWAB
    : never

/** @noSelf */
declare interface BasicFileHandle {
    close(): void
}

/** @noSelf */
declare interface FileHandleR extends BasicFileHandle {
    readLine(): string
    readAll(): string
}

/** @noSelf */
declare interface FileHandleWA extends BasicFileHandle {
    write(data: string): void
    writeLine(data: string): void
    flush(): void
}

/** @noSelf */
declare interface FileHandleRB extends BasicFileHandle {
    read(): number
}

/** @noSelf */
declare interface FileHandleWAB extends BasicFileHandle {
    write(byte: number): void
}

/**
 * @link https://computercraft.info/wiki/Fs_(API)
 */
declare module fs {
    /**
     * Returns a list of all the files (including subdirectories
     * but not their contents) contained in a directory, as a
     * numerically indexed table.
     */
    export function list(path: string): string[]

    /**
     * Checks if a path refers to an existing file or directory.
     */
    export function exists(path: string): boolean

    /**
     * Checks if a path refers to an existing directory.
     */
    export function isDir(path: string): boolean

    /**
     * Checks if a path is read-only (i.e. cannot be modified).
     */
    export function isReadOnly(path: string): boolean

    /**
     * Gets the final component of a pathname.
     */
    export function getName(path: string): string

    /**
     * Gets the storage medium holding a path,
     * or nil if the path does not exist.
     */
    export function getDrive(path: string): string | undefined

    /**
     * Gets the size of a file in bytes.
     */
    export function getSize(path: string): number

    /**
     * Gets the remaining space on the drive containing
     * the given directory.
     */
    export function getFreeSpace(path: string): number

    /** Makes a directory. */
    export function makeDir(path: string): void

    /**
     * Moves a file or directory to a new location.
     */
    export function move(fromPath: string, toPath: string): void

    /**
     * Copies a file or directory to a new location.
     */
    export function copy(fromPath: string, toPath: string): void

    /**
     * Combines two path components, returning a path
     * consisting of the local path nested inside the base
     * path.
     */
    export function combine(basePath: string, localPath: string): string

    /**
     * Opens a file so it can be read or written.
     */
    export function open<M extends FileMode>(path: string, mode: M): FileHandle<M>

    /**
     * Searches the computer's files using wildcards.
     * Requires version 1.6 or later.
     */
    export function find(wildcard: string): string[]

    /**
     * Returns the parent directory of path.
     * Requires version 1.63 or later.
     */
    export function getDir(path: string): string

    /**
     * Returns a list of strings that could be combined with
     * the provided name to produce valid entries in the
     * specified folder. Requires version 1.74 or later.
     */
    export function complete(
        partialName: string,
        path: string,
        includeFiles?: boolean,
        includeSlashes?: boolean
    ): string[]
}
