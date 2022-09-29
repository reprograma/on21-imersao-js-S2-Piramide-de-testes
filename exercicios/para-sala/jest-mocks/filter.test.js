//const { expect } = require('expect')
//const { describe } = require('yargs')
// const { expect } = require('chai')
// const { describe } = require('mocha')
const filterCharacter = require('./filter')

//ApiURL = ghibliapi.herokuapp.com/people

const mockPersonagens = [
   
    {
        name: 'Tombo',
        alive: true
    },{
        name: 'Ponyo',
        alive: true
    },{
        name: 'Yubaba',
        alive: false
    }, {
        name: 'Totoro',
        alive: false
    },{
        name: 'Sophie',
        alive: true
    }
]

jest.mock('./is-alive', () => {
    isAlive = jest.fn(() => true)
 })

describe('Filtrar Personagem', () => {
    test('Filtrar Caracter', () => {
       // const resultado = filterCharacter(listaPersonagens, 'chirino')
        const resultado = filterCharacter(mockPersonagens, 'Tombo')
        
        expect(resultado).toEqual()
       // expect(resultado.name[0]).toEqual()
    
    })

    test('Filtrar Caracter', () => {
        // const resultado = filterCharacter(listaPersonagens, 'chirino')
         const resultado = filterCharacter(mockPersonagens, 'Tombo')
         
         expect(resultado).toEqual()
        // expect(resultado.name[0]).toEqual()
     
     })
})



// expect(mock).toHavenBeenCalled()

describe('  ', () => {
    test('', () => {
        const mock = jest.fn(() => true)
    })
})