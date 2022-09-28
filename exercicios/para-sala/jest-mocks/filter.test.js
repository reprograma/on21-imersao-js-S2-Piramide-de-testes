const filterCharacter = require("./filter");

const mockPersonagens = [
  {
    name: "leia",
  },

  {
    name: "chihiro",
  },

  {
    name: "mononoke",
  },
];

describe("filtrar personagem", () => {
  test("filtra pelo nome de um personagem", () => {
    const resultado = filterCharacter(mockPersonagens, "chihiro");

    expect(resultado.length).toEqual();
  });
});

test("filtra a lista de personagens e verificar se personagem esta vivo", () => {
  const mockIsAlive = jest.fn(() => true);
  const resultado = filterCharacter(mockPersonagens, "chihiro", mockIsAlive);

  expect(resultado.length).toEqual(1);
  expect(mockIsAlive).toBeCalledTimes(resultado.length);
});

//quando o modulo é externo à aplicação
//jest.mock('./isAlive', )