type NPhi = {
  n: number, //Produto dos primos
  phiN: number //Totiente do produto, calculado facilmente com os primos originais
}
function createPhiN(): NPhi {
  //create a n and returns his totient
  //the primes must be big numbers to difficult to fatorate the n in the primes
  const primeP = 13
  const primeQ = 11

  const n = primeP * primeQ
  const phiN = (primeP - 1) * (primeQ - 1)

  return ({
    n,
    phiN
  })
}

//Valor arbiratrio sendo primo relativo do totiente de N e menor que totiente de N
function createE(phiN: number): number {
  for (let e = 3; e < phiN; e += 2) {
    if (isValidE(e, phiN) && euclides(e, phiN)) {
      return e;
    }
  }
  throw new Error("No valid E found");
}

function isValidE(e: number, phiN: number): boolean {
  //verify if the E is in a valid group
  // 0 must be greater than 1 but minor than the N totiente to be valid on modular arithmetics
  return (1 < e && e <= phiN)
}

function euclides(minor: number, major: number): boolean {
  //verify if the numbers are relatively primes
  if(minor > major) throw new Error("First argument must be the minor number")
  let rest, x, y

  x = major
  y = minor

  //Faz divisões sucessivas e armazena o resto, caso X chegue a 1, ambos são primos
  /**
   *    13 7 % 6
   *    7  6 % 1
   *    6  1 % 0
   * 
   *    y === 0 não executa novamente,
   *    x === 1 então são primos
   */
  while(y !== 0) {
    rest = x % y

    x = y
    y = rest
  }
  return x === 1
}

//Combinação linear para descobrir y1, inverso modular da expressão
function extendedEuclides(e: number, phiN: number): number {
  let x0 = 1, x1 = 0
  let y0 = 0, y1 = 1
  let a = phiN, b = e

  while (b !== 0) {
    let quocient = Math.floor(a / b)
    let rest = a % b

    let xTemp = x0 - quocient * x1
    let yTemp = y0 - quocient * y1

    a = b
    b = rest

    x0 = x1
    x1 = xTemp
    y0 = y1
    y1 = yTemp
  }

  if (y1 < 0) y1 += phiN;
  return y1
}

// Calcula o inverso modular
function calculateD(e, phiN) {
  // e * d === 1 mod phiN
  // that can be expressed like ar linear combination in extended euclides algorithm
  // e * x + phiN * y = 1
  
  return extendedEuclides(e, phiN)
}

function formatKeys(e, d, n) {
  const publicKey = { e, n }
  const privateKey = { d, n }

  return {
    publicKey,
    privateKey
  }
}

export function createRSAKeyPair() {
  const { n, phiN } = createPhiN()
  const e = createE(phiN)
  const d = calculateD(e, phiN)

  const keyPair = formatKeys(e, d, n)

  return keyPair
}

