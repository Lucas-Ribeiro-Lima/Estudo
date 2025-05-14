const coloredCells = (n: number): number => 1 + 2*n*(n-1);

// 1 + 4*0 = 1 1minuto
// 1 + 4*1 = 5 2minuto
// 5 + 4*2 = 13 3minuto
// 13 + 4*3 = 25 4minuto
// 25 + 4*4 = 41 5minuto

// 1 + 4n(n -1)/2 = 1 + 2n(n-1) 
// acc + 4 * (n - 1) = sendo n o numero de minutos