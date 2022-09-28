const filterCharacter = require("./filter");

const mockPersonagens = [
  {
    name: "leia",
  },
  {
    name: "ponyo",
  },
  {
    name: "karu",
  },
  {
    name: "mononoke",
  },
  {
    name: "chihiro",
  },
  {
    name: "haru",
  },
  {
    name: "totoro",
  },
];

describe("filtrar personagem", () => {
  test("filtra pelo nome de um personagem", () => {
    const character = "chihiro";
    const resultado = filterCharacter(mockPersonagens, character);

    expect(resultado[0].name).toEqual(character);
  });
});

describe("filtar a lista de personagens e verificar se está vivo", () => {
  const mockIsAlive = jest.fn(() => true);
  const resultado = filterCharacter(mockPersonagens, "karu");
  expect(mockIsAlive).toBeTruthy();
});

//quando o modulo é externo, importamos assim:
jest.mock("./is-alive", () => {
  //personalizando o retorno da função
  isALive: jest.fn(() => true);
});
