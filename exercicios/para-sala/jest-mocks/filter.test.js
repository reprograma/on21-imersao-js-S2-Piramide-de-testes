const filterCharacter = require('./filter')
const {isAlive} = require('./is-alive')


const mockPersonagens = [
    {
      name: 'leia',
      alive: false
    },{
      name: 'ponyo',
      alive: true
    },{
      name: 'karu',
      alive: true
    },{
      name: 'mononoke',
      alive: false
    },{
      name: 'haru',
    },{
      name: 'totoro',
    },
  ]

jest.mock('./is-alive', () => {
    isALive: jest.fn(() => true)
})

describe('filtrar personagem', () => {
    test('filtra pelo nome de um personagem', () => {
        const resultado = filterCharacter(mockPersonagens, 'karu')

        expect(resultado).toEqual()
    })

    test('filtar a lista de personagens e verificar se personagem está vivo', () => {
        // const mockIsAlive = jest.fn(() => true)
        const resultado = filterCharacter(mockPersonagens, 'karu')

        expect(resultado.length).toEqual(1)

        //expect(mockIsAlive).toBeCalledTimes(resultado.length)
    })
})

const resultado = 2
jest.spyOn()