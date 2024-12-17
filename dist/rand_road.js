import { ActorsTypeList } from "./defineType.js";
// creat a matrix with i*WIDTH+j in the position(i,j) 
export const createMatrix = (Width, Height) => {
    const matrix = Array.from({ length: Height }, () => Array.from({ length: Width }, () => 0));
    return matrix.map((x, i) => {
        return x.map((y, j) => {
            return i * Width + j;
        });
    });
};
// return the path between start and end 
export const randomPath = (world, matrix, start, end) => {
    // to take a copy of matrix and save the origin matrix
    const copyMatrix = matrix.slice();
    // visited to take cells visited with dfs
    const visited = [start];
    const path = dfs(world, start, visited, copyMatrix, end);
    return path;
};
export const dfs = (world, currentPosition, visited, matrix, end) => {
    // if we find the end postion
    if (currentPosition === end) {
        return [currentPosition];
    }
    // to take all neighbors of currentPosition
    const neighbors = getNeighbors(currentPosition, world.Width, world.Height);
    // Shuffle neighboring positions to get a random order
    shuffleArray(neighbors);
    //to visite all neighbors
    for (const neighbor of neighbors) {
        let isVisited = false;
        // to check if the neighbor was visited  or no
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] === neighbor) {
                isVisited = true;
                break;
            }
        }
        if (!isVisited) {
            // we add neighbor to visited table
            visited.push(neighbor);
            // dfs to neighbor
            const path = dfs(world, neighbor, visited, matrix, end);
            if (path !== null) {
                // add currentPosition to the begining of the path
                path.unshift(currentPosition);
                return path;
            }
        }
    }
    // return null if there is no path 
    return null;
};
export const getNeighbors = (position, Width, Height) => {
    const i = Math.floor(position / Width);
    const j = position % Width;
    const availableNeighbors = [
        i > 0 ? position - Width : -2,
        j > 0 ? position - 1 : -2,
        i < Height - 1 ? position + Width : -2,
        j < Width - 1 ? position + 1 : -2 // right
    ];
    const neighbors = availableNeighbors.filter(neighbor => neighbor !== -2);
    return neighbors;
};
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
export const Road = (world, start, end) => {
    const t = randomPath(world, createMatrix(world.Width, world.Height), start, end);
    if (t !== null) {
        for (let i = 0; i < t.length; i++) {
            const [x, y] = [Math.floor(t[i] / world.Width), t[i] % world.Width];
            world.Matrix[x][y].AnActor = ActorsTypeList.Road;
        }
    }
    world.Matrix[Math.floor(end / world.Width)][end % world.Width].AnActor = ActorsTypeList.Road;
    return world;
};
/////////////////////////////////////           END           /////////////////////////////////////////////////////
//# sourceMappingURL=rand_road.js.map