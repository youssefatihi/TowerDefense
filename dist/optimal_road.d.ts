import { world, point } from "./defineType.js";
export declare function GetActorType(w: world, p: point): string;
export declare function GetRoadInWorld(w: world): point[];
export declare function isValidPosition(w: world, p: point): boolean;
export declare function ConstructNeighbors(w: world, p: point): point[];
export declare function SearchForVertex(R: point[], p: point): number;
export declare function OptimalRoad(p: point, w: world, end: point): point[];
export declare function NextOptimalMove(p: point, w: world, OptimalRoad: point[]): point;
