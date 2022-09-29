const request =  require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1"

describe("Deve retornar as informações do IBGE no Brasil", () =>{
    test("deve retornar 200 e entrotar informações cidade São Paulo", async () => {
        await request(ApiUrl)
            .get('/localidades/municipios/3550308/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('São Paulo')
            })
    })

})

  test("Deve retornar 200 e encontrar Nordeste", async () => {
    await  request(ApiUrl)
            .get('/localidades/regioes/2')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Nordeste')
            })
    })

   test("Deve retornar os municipio de Álvaro de Carvalho", async() => {
        await request(ApiUrl)
            .get('/localidades/municipios/3501400')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Álvaro de Carvalho')
            })
    })
    test("deve retornar 200 e entrotar informações da regioes imediatas Barbacena", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes-imediatas/310037/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Barbacena')
            })
    })

