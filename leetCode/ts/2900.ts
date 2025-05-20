// Example 2:

// Input: words = ["a","b","c","d"], groups = [1,0,1,1]

// Output: ["a","b","c"]

// Explanation: A subsequence that can be selected is ["a","b","c"] because groups[0] != groups[1] and groups[1] != groups[2].
// Another subsequence that can be selected is ["a","b","d"] because groups[0] != groups[1] and groups[1] != groups[3]. 
//It can be shown that the length of the longest subsequence of indices that satisfies the condition is 3.

function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const longestSubsequence = [ words[0] ]

  for(let i = 1; i < groups.length; i++) {
    if(groups[i] !== groups[i-1]) longestSubsequence.push(words[i])
  }

  return longestSubsequence
};

const words = ["lr","h"]
const groups = [0, 0]

console.log(getLongestSubsequence(words, groups))