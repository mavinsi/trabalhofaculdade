function verificarPalindromo(palavra){
    if(palavra === palavra.split('').reverse().join('')){
     return true
    }else{
   return false
    }
}