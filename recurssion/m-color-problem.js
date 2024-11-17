function isSafe(node, G, color, col) {
    for (const neighbor of G[node]) {
        if (color[neighbor] === col) return false;
    }
    return true;
}

function solve(node, G, color, n, m) {
    if (node === n) return true;

    for (let i = 1; i <= m; i++) {
        if (isSafe(node, G, color, i)) {
            color[node] = i;
            if (solve(node + 1, G, color, n, m)) return true;
            color[node] = 0;
        }
    }
    return false;
}

function graphColoring(G, color, i, C) {
    const n = G.length;
    return solve(i, G, color, n, C);
}

// Example usage
const N = 4;
const M = 3;
const G = Array.from({ length: N }, () => []);

G[0].push(1, 3, 2);
G[1].push(0, 2);
G[2].push(1, 3, 0);
G[3].push(2, 0);


const color = Array(N).fill(0);
const ans = graphColoring(G, color, 0, M);
console.log(ans ? "1" : "0");
