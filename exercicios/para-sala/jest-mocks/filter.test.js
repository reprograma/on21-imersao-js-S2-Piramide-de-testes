const filterCharacter = require("./filter");

const mockPersonagens = [
  { name: "leia", isAlive: false },
  { name: "ponyo", isAlive: true },
  { name: "karu", isAlive: true },
  { name: "mononoke", isAlive: false },
];

describe("filtrar personagem", () => {
  test("filtra pelo nome de um personagem", () => {
    const resultado = filterCharacter(mockPersonagens, "chihiro");
    expect(resultado[0].name).toEqual("chihiro");
  });

  test("filtrar a lista de personagens e verificar se personagem está vivo", () => {
    const mockIsAlive = jest.fn(() => true);
    const personagem = filterCharacter(mockPersonagens, "karu", mockIsAlive);

    expect(personagem.length).toEqual(1);
  });
});
