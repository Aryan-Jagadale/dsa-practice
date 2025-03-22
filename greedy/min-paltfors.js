function minPlatforms(arrivals, departures) {
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platfors = 0, maxPlatforms = 0;
    let i = 0, j = 0;

    while (i < arrivals.length && j < departures.length) {
        if (arrivals[i] < departures[j]) {
            platfors++;
            i++;
        } else {
            platfors--;
            j++;
        }

        maxPlatforms = Math.max(maxPlatforms, platfors);
    }
    return maxPlatforms;
}

// Example Usage
let arrivals = [900, 940, 950, 1100, 1500, 1800];
let departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minPlatforms(arrivals, departures)); // Output: 3
