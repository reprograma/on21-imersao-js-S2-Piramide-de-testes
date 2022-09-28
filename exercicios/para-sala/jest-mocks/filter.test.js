const filterCharacter = require('./filter')
const isALive = require('/isALive')
    

const mockPersonagens = [


{
        name: "leia"
    },

    ,{   
        name: "chihiro"
    },

   ,{
        name: 'mononoke',
    },
]

jest.mock('./is-alive', () => {
    isALive: jest.fn(() => true)
})



describe('filtrar personagem', () => {
    test ('filtra pelo nome de um personagem', () => {
        const resultado = filterCharacter(mockPersonagens, 'karu')

        expect(resultado.length).toEqual(1)
    
    })
    
    test("filtrar a lista de personagens e verificar se personagem  está vivo", () => {
        const mockIsalive = jest.fn (() => true)
        const resultado = filterCharacter(mockPersonagens, 'karu', mockIsalive)

        expect(resultado.length).toEqual(1)

        expect(mockIsalive).toBeCalledTimes(resultado.length)
    })

})

