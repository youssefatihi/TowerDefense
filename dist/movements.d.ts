import { world, position, point } from "./defineType.js";
export declare const AvailablePosition: (p: point, w: world) => boolean;
export declare const noMove: (pos: position, aWorld: world, type: string) => any;
export declare const SimpleMove: (anActor: position, aWorld: world, type: string) => point;
