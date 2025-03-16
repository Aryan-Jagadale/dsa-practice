class Item {
    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
    }
}

function fractionalKnapsack(W, items) {
    // Sort items by value/weight ratio in descending order
    items.sort((a, b) => (b.value/b.weight) - (a.value/a.weight));

    console.log(items);
    

    let totalValue = 0;

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (W < element.weight) {
            totalValue += (element.value / element.weight) * W;
            break;
        }else{
            totalValue += items[i].value;
            W -= items[i].weight;
        }
        
    }

   

    return totalValue;
}

// Example usage:
const items = [
    new Item(100, 20),
    new Item(60, 10),
    new Item(100, 50),
    new Item(200, 90)
];
const maxWeight = 50;

console.log("Maximum value in Knapsack =", fractionalKnapsack(maxWeight, items));