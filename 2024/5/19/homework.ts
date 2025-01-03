function floydWarshall(graph: number[][]) {
    let n = graph.length;
    let dist = graph.map(row => row.slice()); // Make a deep copy of the graph

    for (let k = 0; k < n; k++) {
        let distK = dist.map(row => row.slice()); // Make a deep copy for the current iteration
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    distK[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
        dist = distK.map(row => row.slice()); // Update dist with the new distances
    }

    return dist;
}

const inf = Infinity;
const graph = [
    [0, 2, inf, 1, 8],
    [6, 0, 3, 2, inf],
    [inf, inf, 0, 4, inf],
    [inf, inf, 2, 0, 3],
    [3, inf, inf, inf, 0]
];

console.log(floydWarshall(graph)[0]);
