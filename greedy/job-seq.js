class Job {
    constructor(id, deadline, profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

function jobSequencing(jobs, n) {
    // Sort jobs in descending order of profit
    jobs.sort((a, b) => b.profit - a.profit);

    // To keep track of free time slots
    let result = new Array(n).fill(false);

    // To store result (Sequence of jobs)
    let jobSequence = new Array(n).fill(null);

    // Iterate through all given jobs
    for (let i = 0; i < jobs.length; i++) {
        // Find a free slot for this job (Note that we start from the last possible slot)
        for (let j = Math.min(n, jobs[i].deadline) - 1; j >= 0; j--) {
            // Free slot found
            if (result[j] === false) {
                result[j] = true;
                jobSequence[j] = jobs[i].id;
                break;
            }
        }
    }

    // Print the sequence of jobs
    console.log("Job sequence: ", jobSequence.filter(job => job !== null));
}

// Example usage
let jobs = [
    new Job('a', 2, 100),
    new Job('b', 1, 19),
    new Job('c', 2, 27),
    new Job('d', 1, 25),
    new Job('e', 3, 15)
];

let n = 3; // Number of time slots
jobSequencing(jobs, n);