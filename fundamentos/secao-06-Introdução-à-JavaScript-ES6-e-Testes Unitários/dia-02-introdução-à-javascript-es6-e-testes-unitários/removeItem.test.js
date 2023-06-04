const removeItem = require('./removeItem.js');
describe('Testa a função removeItem', () => {

  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
test("Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.", () => {
  expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4 ]);
})

// Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
test("Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].", () => {
  expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

// Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
test("Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado", () => {
  expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})
});