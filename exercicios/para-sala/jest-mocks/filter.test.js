const filterCharacter = require('./filter')

const mockPersonagens = [
    {
        "name": "leia"
    },

    {   
        "name": "chihiro"
    },

    {
        "name": 'mononoke',
    }
]

describe('filtrar personagem', () => {
    test ('filtra pelo nome de um personagem', () => {
        const resultado = filterCharacter(mockPersonagens, 'chihiro')

        expect(resultado.length).toEqual(1)
    })
})

// const mock = jest.fn(() => true)

// expect(mock).to
// describe('chama função filter', () =>{

// })

test('filtar a lista de personagens e verificar se personagem está vivo', () => {
    const mockIsAlive = jest.fn(() => true)
    const resultado = filterCharacter(mockPersonagens, 'chihiro', mockIsAlive)

    expect(resultado.length).toEqual(1)

    expect(mockIsAlive).toBeCalledTimes(resultado.length)
})
