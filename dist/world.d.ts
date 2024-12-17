import { world, position } from './defineType.js';
export declare const CreateEmptyMatrix: (width: number, height: number) => position[][];
export declare const CreateWorld: (width: number, height: number) => world;
export declare const initializeWorld: (world: world) => world;
export declare const display: (world: world, end: number) => void;
