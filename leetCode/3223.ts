function minimumLength(s: string): number {
    const stringMap: Record<string, number> = {}
    let totalLenght = s.length
    
    for(let char of s) {
      if(stringMap.hasOwnProperty(char)) {
        stringMap[char] += 1
        continue
      }
      stringMap[char] = 1
    }

    for(let value of Object.values(stringMap)) {
      const possibleDivision = Math.floor(value/3) * 2
      totalLenght -= possibleDivision
    }

    return totalLenght
};

const s = "ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj"

console.log(minimumLength(s))
// [0, 3, 4, 7] / 3 = 1,333
// [1, 3, 5, 10, 5] / 3 = 1,8
// [0, 3, 4] / 3 = 1
// [1, 2, 3, 4, 5, 6] / 3 = 2
// [1, 3, 5, 10, 5, 7, 8] / 3 = 2,333
// [1u, 2u, 3u, 4u, 5u, 6u, 7u, 8u ] / 3 = 8/3 ~2,6 3 

// | | | | | | 

// You are given a string s.

// You can perform the following process on s any number of times:

// Choose an index i in the string such that there is at least one character to the left of index i that is equal to s[i], and at least one character to the right that is also equal to s[i].
// Delete the closest occurrence of s[i] located to the left of i.
// Delete the closest occurrence of s[i] located to the right of i.
// Return the minimum length of the final string s that you can achieve.

// Example 1:

// Input: s = "abaacbcbb"

// Output: 5

// Explanation:
// We do the following operations:

// Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
// Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".
// Example 2:

// Input: s = "aa"

// Output: 2

// Explanation:
// We cannot perform any operations, so we return the length of the original string.