// dummy head :  prev <--[-1, -1] -------> [-1,-1]---->null   : dummy tail
//                                <-------


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value)

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key,value);
    }
}

// Example usage:
const lruCache = new LRUCache(2);



lruCache.put(1, 1);  // Cache: {1: 1}
lruCache.put(2, 2);  // Cache: {1: 1, 2: 2}
console.log(lruCache.get(1)); // Output: 1, Cache: {2: 2, 1: 1}
lruCache.put(3, 3);
console.log(lruCache.get(2)); // Output: -1 (not found)
lruCache.put(4, 4);  // Evicts key 1, Cache: {3: 3, 4: 4}
console.log(lruCache.get(1)); // Output: -1 (not found)
console.log(lruCache.get(3)); // Output: 3
console.log(lruCache.get(4)); // Output: 4
