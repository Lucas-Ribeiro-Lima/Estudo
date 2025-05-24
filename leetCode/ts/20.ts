/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 */
function isValid(s: string): boolean {
    const stack: string[] = []

    const symbols = new Map([[ "(", ")"], ["{", "}"], ["[", "]"]])

    for(let c of s) {
      if(symbols.has(c)) {
        stack.push(c)
        continue
      }
      if(!stack.length) return false
      if(symbols.get(stack.pop()!) !== c) return false
    }

    return !stack.length
};
