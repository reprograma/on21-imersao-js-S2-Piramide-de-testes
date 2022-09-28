const filterCharacter = require('./filter') 

    const mockPersonagens = [
        {
          name: 'leia',
          alive: false
        },{
          name: 'ponyo',
          alive: false
        },{
          name: 'karu',
          alive: true
        },{
          name: 'mononoke',
          alive: false
        },{
          name: 'haru',
          alive: false
        },{
          name: 'totoro',
          alive: false
        },
      ]

describe('filtrar personagem', () => {
    test('filtrar pelo nome de um personagem', () => {
        const personagem = filterCharacter(mockPersonagens, 'karu')

        expect(personagem.length).toEqual(1)
    })

    test('filtrar a lista de personagens e verificar se personagem está vivo', () => {
        const mockIsAlive = jest.fn(() => true)
        const resultado = filterCharacter(mockPersonagens,'karu', mockIsAlive)

        expect(resultado.length).toBe(resultado)
    })
})
