const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('pera', 'kg', 10, 2)).toEqual({
      name: "pera",
      quantity: 2,
      unit: 'kg',
      price: 10,});
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toEqual({
      name: 'banana',
      quantity: 0,
      unit: 'kg',
      price: 1.99,});
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error);
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(3, 'kg', 2, 2)).toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -2, 2)).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 2)).toThrow('O preço do item deve ser maior que zero');
  });
});