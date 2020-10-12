class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.items = new Map()
  }

  put(key, value) {
    if(this.items.size < this.capacity) {
      this.items.set(key, value)
    } else {
      this.items.delete(this.items.keys().next().value)
      this.items.set(key, value)
    }
  }

  get(key) {
    if(!this.items.has(key)) return -1
    let value = this.items.get(key)
    this.items.delete(key)
    this.items.set(key, value)

    return this.items.get(key)
  }
}

const cache = new LRUCache(3)
cache.put(1, 1)
cache.put(2, 2)
cache.put(3, 3)
cache.put(4, 4)
cache.put(5, 5)

console.log(cache.items)