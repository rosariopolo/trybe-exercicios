const { mapString, encode, decode } = require('./encodeDecode')

describe('Testa a função encode e decode', () => {
  
  // Teste se encode e decode são funções.
  test('Teste se encode é função', () => {
    expect(typeof encode).toBe("function");
  })
  test('Teste se decode é função', () => {
  expect(typeof decode).toBe("function");
});
  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
 
  test('Se a vogal "a" é convertida em "1" respectivamente', () => {
    expect(encode('a')).toEqual('1');
  })
  test('Se a vogal "e" é convertida em "2" respectivamente', () => {
    expect(encode('e')).toEqual('2');
  })
  test('Se a vogal "i" é convertida em "3" respectivamente', () => {
    expect(encode('i')).toEqual('3');
  })
  test('Se a vogal "o" é convertida em "4" respectivamente', () => {
    expect(encode('o')).toEqual('4');
  })
  test('Se a vogal "u" é convertida em "5" respectivamente', () => {
    expect(encode('u')).toEqual('5');
  });
  
  // Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.

  it('Se o número "1" é convertido na vogal "a"', () => {
    expect(decode('1')).toEqual('a');
  })
  it('Se o número "2" é convertido na vogal "e"', () => {
    expect(decode('2')).toBe('e');
  })
  it('Se o número "3" é convertido na vogal "i"', () => {
    expect(decode('3')).toBe('i');
  })
  it('Se o número "4" é convertido na vogal "o"', () => {
    expect(decode('4')).toBe('o');
  })
  it('Se o número "5" é convertido na vogal "u"', () => {
    expect(decode('5')).toBe('u');
  });

  // Teste se as demais letras e os demais números não são convertidos para cada caso.

    it('Testa se outra letra não é convertido', () => {
      expect(encode('d')).toEqual('d');
    })
    test('Testa se outro numero não é convertido', () => {
      expect(decode('7')).toEqual('7');
    })

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

  it('Testa se a string que é retornada pela função tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('teste').length).toBe(5);
  })
})
