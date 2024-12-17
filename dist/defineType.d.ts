export type actor = {
    Move(pos: position, world: world, type: string): point;
    Type: string;
    Color: string;
    HitPoints: number;
    Cost: number;
    gain: number;
    Damage: number;
    AttackRange: number;
};
export type point = {
    x: number;
    y: number;
};
export type position = {
    Pos: point;
    AnActor: actor;
};
export type world = {
    Matrix: position[][];
    Width: number;
    Height: number;
    Score: number;
    Actors: position[];
    Towers: position[];
};
export type move = {
    NewPos: point;
    ExPos: point;
};
export type action = {
    AnActorInfos: position;
    aMove: move;
};
export declare const noMove: (pos: position, aWorld: world, type: string) => any;
export declare const ActorsTypeList: {
    SimpleMonster: {
        Move: (anActor: position, aWorld: world, type: string) => point;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    BigMonster: {
        Move: (anActor: position, aWorld: world, type: string) => point;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    SimpleTower: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    SimpleTowerII: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    SimpleTowerIII: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    MagicTower: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    MagicTowerII: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    MagicTowerIII: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    FlameTower: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Floor: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        Cost: number;
        HitPoints: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    River: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Road: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Tree: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Fire: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Portal: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
    Optimal: {
        Move: (pos: position, aWorld: world, type: string) => any;
        Type: string;
        Color: string;
        HitPoints: number;
        Cost: number;
        gain: number;
        Damage: number;
        AttackRange: number;
    };
};
