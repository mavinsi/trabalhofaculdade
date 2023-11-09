function substituirLinhaPorZeros(matriz, numero) {
    if (numero >= 0 && numero < matriz.length) {
      matriz[numero] = Array(matriz[numero].length).fill(0);
    }
  }
  
  // Exemplo de uso:
  const minhaMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  substituirLinhaPorZeros(minhaMatriz, 1);
  console.log(minhaMatriz);