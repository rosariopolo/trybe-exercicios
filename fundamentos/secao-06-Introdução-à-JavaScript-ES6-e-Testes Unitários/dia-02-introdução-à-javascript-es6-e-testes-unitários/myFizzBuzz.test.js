const myFizzBuzz = require("./myFizzBuzz")

describe('Testa a função myFizzBuzz', () => {
  
  // Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
   
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  })
  // Caso num seja um número divisível apenas por 3, a função retorna "fizz".
  test('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  })
  // Caso num seja um número divisível apenas por 5, a função retorna "buzz".
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  // Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
  test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  // Caso num não seja um número, a função retorna false.
  it('Caso num não seja um número, a função retorna false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })
});
