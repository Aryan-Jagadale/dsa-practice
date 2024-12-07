class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const { value, frequency } = this.cache.get(key);        
        this.cache.set(key, { ...this.cache.get(key), frequency: frequency+1 });
        console.log("this",this.cache);
        
        return value;

    }

    put(key, value) {
        if (this.cache.has(key)) {
            const { frequency } = this.cache.get(key);
            this.cache.set(key, { value, frequency:frequency+1 });
        }else if (this.cache.size >= this.capacity) {
            this._evictLFU();
        }

        this.cache.set(key, { value, frequency: 1 });
        console.log("this",this.cache);
        
    }
    _evictLFU() {

        // Get less frequency key
        let lfuKey = null;
        let lfuFrequency = Infinity;
        for (const [key, { frequency }] of this.cache) {
          if (frequency < lfuFrequency) {
            lfuKey = key;
            lfuFrequency = frequency;
          }
        }
        this.cache.delete(lfuKey);        
        
      }


}




const lfu = new LFUCache(2);

lfu.put(1, 1); // Cache = {1:1}
lfu.put(2, 2); // Cache = {1:1, 2:2}
console.log(lfu.get(1)); // Returns 1, Cache = {1:1*, 2:2}
lfu.put(3, 3); // Evicts key 2, Cache = {1:1*, 3:3}
console.log(lfu.get(2)); // Returns -1 (not found)
console.log(lfu.get(3)); // Returns 3, Cache = {1:1, 3:3*}
lfu.put(4, 4); // Evicts key 1, Cache = {3:3, 4:4}
console.log(lfu.get(1)); // Returns -1 (not found)
console.log(lfu.get(3)); // Returns 3, Cache = {3:3*, 4:4}
console.log(lfu.get(4)); // Returns 4, Cache = {3:3, 4:4*}
