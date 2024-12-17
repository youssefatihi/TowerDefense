import { actor, world, point, action } from "./defineType.js";
export declare const CreateActor: (p: point, act: actor, w: world) => world;
export declare function IsGoodTreePlacement(p: point, w: world): boolean;
export declare const TreesPlacement: (w: world) => world;
export declare const CreateMagicTower: (i: number, j: number, w: world) => world;
export declare const CreateSimpleTower: (i: number, j: number, w: world) => world;
export declare const CreateFlameTower: (i: number, j: number, w: world) => world;
export declare function isValidPosition(w: world, p: point): boolean;
export declare const EnemiesInAttackRange: (p: point, w: world) => point[];
export declare const TowersAttackRange: (p: point, w: world) => point[];
export declare const TowersAttacks: (w: world) => world;
export declare function killActor(w: world, p: point): world;
export declare const TowersPlacement: (w: world, numberoftowers: number) => world;
export declare const updatetower: (w: world, i: number, j: number) => world;
export declare function addActorsToWorld(w: world, actr: actor, xPosition: number): world;
export declare function in_astar(x: point, y: point): number;
export declare function gamePhase(aWorld: world, OptimalRoad: point[]): action[];
export declare function FilterActions(aPhase: action[]): action[];
/**
 *
 * @param aPhase a phase in the game
 * @param aWorld the world
 * @returns execute all modifications needed by the pahe in the world
 */
export declare function gameMotor(aPhase: action[], aWorld: world): world;
export declare function gameover(world: world, end: number): number;
