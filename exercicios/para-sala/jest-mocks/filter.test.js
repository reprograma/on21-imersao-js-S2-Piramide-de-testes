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

        expect(personagem.length).toEqual(2)
    })

    test('filtrar a lista de personagens e verificar se personagem está vivo', () => {
        const mockIsAlive = jest.fn(() => true)
        const personagem = filterCharacter(mockPersonagens,'karu', mockIsAlive)

        expect(personagem.length).toEqual(2)
    })
})
