interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}

type GroupByFnT<T> = (item: T) => string


Array.prototype.groupBy = function<T>(this: T[],fn: GroupByFnT<T>): Record<string, T[]> {
  const map: Map<string, T[]> = new Map()

  for(let val of this) {
    const key = fn(val)
    if(!map.has(key)) {
      map.set(key, [ val ])
      continue
    }
    map.get(key)!.push(val)
  }

  return Object.fromEntries(map.entries())
}

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/