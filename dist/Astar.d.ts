export type Vertex = {
    s: number;
};
export type Graph = {
    mat: number[][];
    size: number;
};
export type Arc = {
    from: Vertex;
    to: Vertex;
    weight: number;
};
declare function Astar(s: Vertex, t: Vertex, G: Graph): [number[], number[]];
export { Astar };
