type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  return dfs(obj) as Obj;
}

function dfs(value: JSONValue): JSONValue {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean).map(dfs);
  }
  
  if (typeof value === 'object') {
    for (const [key, val] of Object.entries(value)) {
      if (Boolean(val)) {
        value[key] = dfs(val);
      } else {
        delete value[key];
      }
    }
  }
  return value;
}