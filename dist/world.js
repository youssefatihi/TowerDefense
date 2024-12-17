import { ActorsTypeList } from './defineType.js';
//this function create an empty matrix
export const CreateEmptyMatrix = (width, height) => {
    //let tmp: position[][] = [...Array(height)].fill(0);
    const b = ActorsTypeList.Floor;
    const tmp = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));
    return tmp.map((x, i) => {
        return x.map((y, j) => {
            return { AnActor: ActorsTypeList.Floor, Pos: { x: i, y: j } };
        });
    });
};
//this function create the world with no actors , towers and no road
export const CreateWorld = (width, height) => {
    const emptyWorld = { Matrix: CreateEmptyMatrix(width, height), Width: width, Height: height, Score: 0, Actors: [], Towers: [] };
    return emptyWorld;
};
export const initializeWorld = (world) => {
    const { Matrix: m, ...other } = world;
    const w = { Matrix: CreateEmptyMatrix(world.Width, world.Height), ...other };
    return w;
};
//this a function that displays the world
export const display = (world, end) => {
    let s2 = "";
    let count = 0;
    for (let i = 0; i < world.Height + 19; i++) {
        if (i < world.Height / 2 + 15 && i > world.Height / 2 + 5 && count === 0) {
            s2 += " Score : ";
            s2 += world.Score;
            s2 += " 💀 ";
            count++;
        }
        else {
            s2 += "🕸️ ";
        }
    }
    console.log(s2);
    // console.log("\n");
    // const size : number = Math.floor(world.Height/8);
    // let r : number =0;
    for (let i = 0; i < world.Height; i++) {
        let s = "";
        for (let j = 0; j < world.Width; j++) {
            switch (world.Matrix[i][j].AnActor.Type) {
                case 'SimpleMonster':
                    s += ActorsTypeList.SimpleMonster.Color;
                    break;
                case 'BigMonster':
                    s += ActorsTypeList.BigMonster.Color;
                    break;
                case 'SimpleTower':
                    s += ActorsTypeList.SimpleTower.Color;
                    break;
                case 'MagicTower':
                    s += ActorsTypeList.MagicTower.Color;
                    break;
                case 'Floor':
                    s += ActorsTypeList.Floor.Color;
                    break;
                case 'River':
                    s += ActorsTypeList.River.Color;
                    break;
                case 'Tree':
                    s += ActorsTypeList.Tree.Color;
                    break;
                case 'Fire':
                    s += ActorsTypeList.Fire.Color;
                    break;
                case 'Optimal':
                    s += ActorsTypeList.Optimal.Color;
                    break;
                case 'Road':
                    if (Math.floor(end / world.Width) === i && end % world.Width === j)
                        s += "\x1b[48;2;76;70;50m💀\x1b[0m";
                    else {
                        s += ActorsTypeList.Road.Color;
                    }
                    break;
            }
        }
        console.log(`${s}` + `${i}`);
    }
    console.log("\n");
};
/////////////////////////////////////           END           /////////////////////////////////////////////////////
//# sourceMappingURL=world.js.map