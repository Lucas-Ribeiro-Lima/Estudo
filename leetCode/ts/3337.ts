type Matrix = number[][]
type Vetor = number[]

function lengthAfterTransformations(s: string, t: number, nums: Vetor): number {
  const matrix = Array.from({ length: 26 }, () => Array(26).fill(0))
  const vetor = Array(26).fill(0)

  const aIdx = "a".charCodeAt(0)

  for (const char of s) {
    vetor[char.charCodeAt(0) - aIdx]++;
  }

  for (let i = 0; i < 26; i++) {
    const reach = nums[i];
    for (let offset = 1; offset <= reach; offset++) {
      matrix[i][(i + offset) % 26] = 1;
    }
  }
  
  const transformMatrix = power(matrix, t)
  const finalVetor = multiplyVectorMatrix(vetor, transformMatrix)

  return finalVetor.reduce((prev, acc) => prev + acc) % (10**9 + 7) 
}

function power(M: Matrix, n: number): Matrix {
  if (n === 1) return M;
  const half = power(M, Math.floor(n / 2));
  const full = multiplyMatrices(half, half);
  return n % 2 === 0 ? full : multiplyMatrices(M, full);
}

function multiplyVectorMatrix(v: Vetor, M: Matrix): Vetor {
  const result = Array(M[0].length).fill(0);
  for (let j = 0; j < M[0].length; j++) {
    for (let i = 0; i < v.length; i++) {
      result[j] += v[i] * M[i][j];
    }
  }
  return result;
}

function multiplyMatrices(A: Matrix, B: Matrix): Matrix {
  const m = A.length; //Linhas da A
  const n = A[0].length; // Colunas da A
  const p = B[0].length; // Colunas da B

  // Verifica se a multiplicação é válida
  if (B.length !== n) {
    throw new Error("Número de colunas de A deve ser igual ao número de linhas de B");
  }

  // Inicializa a matriz resultado com zeros
  const C = Array.from({ length: m }, () => Array(p).fill(0));

  // Multiplicação
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const a = "abcyy", t = 2, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]

const res = lengthAfterTransformations(a, t, nums)
console.log(res)


// You are given a string s consisting of lowercase English letters, an integer t representing the number of transformations to perform, and an array nums of size 26. In one transformation, every character in s is replaced according to the following rules:

// Replace s[i] with the next nums[s[i] - 'a'] consecutive characters in the alphabet. For example, if s[i] = 'a' and nums[0] = 3, the character 'a' transforms into the next 3 consecutive characters ahead of it, which results in "bcd".
// The transformation wraps around the alphabet if it exceeds 'z'. For example, if s[i] = 'y' and nums[24] = 3, the character 'y' transforms into the next 3 consecutive characters ahead of it, which results in "zab".
// Return the length of the resulting string after exactly t transformations.

// Since the answer may be very large, return it modulo 109 + 7.

 

// Example 1:

// Input: s = "abcyy", t = 2, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]

// Output: 7

// Explanation:

// First Transformation (t = 1):

// 'a' becomes 'b' as nums[0] == 1
// 'b' becomes 'c' as nums[1] == 1
// 'c' becomes 'd' as nums[2] == 1
// 'y' becomes 'z' as nums[24] == 1
// 'y' becomes 'z' as nums[24] == 1
// String after the first transformation: "bcdzz"
// Second Transformation (t = 2):

// 'b' becomes 'c' as nums[1] == 1
// 'c' becomes 'd' as nums[2] == 1
// 'd' becomes 'e' as nums[3] == 1
// 'z' becomes 'ab' as nums[25] == 2
// 'z' becomes 'ab' as nums[25] == 2
// String after the second transformation: "cdeabab"
// Final Length of the string: The string is "cdeabab", which has 7 characters.