// Watch video
function findCelebrity(n, knows) {
    let knowMe = new Array(n).fill(0); // Tracks how many people know a person
    let iMe = new Array(n).fill(0);   // Tracks how many people the person knows

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (knows(i, j)) {
                knowMe[j] += 1; // Person `j` is known by person `i`
                iMe[i] += 1;    // Person `i` knows person `j`
            }
        }
    }

    console.log("knowMe: ", knowMe);
    console.log("iMe: ", iMe);
    

    // Check for the celebrity
    for (let i = 0; i < n; i++) {
        if (knowMe[i] === n - 1 && iMe[i] === 0) {
            return i;
        }
    }

    return -1; // No celebrity found
}

// Test Case
let matrix = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
];

function knows(a, b) {
    return matrix[a][b] === 1;
}

console.log(findCelebrity(3, knows)); // Output: 2
