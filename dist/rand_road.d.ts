import { world } from "./defineType.js";
export declare const createMatrix: (Width: number, Height: number) => number[][];
export declare const randomPath: (world: world, matrix: number[][], start: number, end: number) => number[] | null;
export declare const dfs: (world: world, currentPosition: number, visited: number[], matrix: number[][], end: number) => number[] | null;
export declare const getNeighbors: (position: number, Width: number, Height: number) => number[];
export declare const shuffleArray: (array: number[]) => void;
export declare const Road: (world: world, start: number, end: number) => world;
