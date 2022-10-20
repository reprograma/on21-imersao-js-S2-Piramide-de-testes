const filterCharacter = require('./filter')

const mockPersonagens = [
  {
    name: 'leia',
    alive: false
  },
  {
    name: 'ponyo',
    alive: false
  },
  {
    name: 'karu',
    alive: true
  },
  {
    name: 'mononoke',
    alive: true
  },
  {
    name: 'haru',
    alive: false
  },
  {
    name: 'totoro',
    alive: true
  },
]

describe('Filter Character', () => {
  test('Filtrar por nome de personagem', () => {
    const resultado = filterCharacter( mockPersonagens, 'totoro')
    expect(resultado[0].name).toEqual('totoro')
  })
  test('Verifica se personagem está viva', () => {
    const resultado = filterCharacter(mockPersonagens, 'ponyo')
    expect(resultado[0].alive).toBeFalsy()
  })
  test('Verifica se personagem está viva', () => {
    const resultado = filterCharacter(mockPersonagens, 'karu')
    expect(resultado[0].alive).toBeTruthy()
    expect(resultado.length).toEqual(1)
  })
})
