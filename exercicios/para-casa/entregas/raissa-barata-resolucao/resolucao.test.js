const request =  require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1"

describe("GET/localidades/estados/{UF}/distritos", () =>{
    test("Deve retornar o estado da Bahia", async () => {
         await request(ApiUrl)
        .get('/localidades/estados/BA/distritos')
        .expect(200)
        .then(response => {
            expect(response.body[0].nome).toEqual("Abaíra")
        })
    })

})

    test("Deve retornar o estado de Sao Paulo", async () => {
         await request(ApiUrl)
        .get('/localidades/regioes/{macrorregioes}')
        .expect(200)
        .then(response => {
            expect(response.body[1].nome).toEqual("Nordeste")
        })
    })


    test("deve retornar 200 e encontrar o municipio de Adamantina", async() => {
        await request(ApiUrl)
            .get('/localidades/municipios/3500105')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Adamantina')
            })
    })

test("deve retornar 200 e entrotar informações da cidade itaquaquecetuba", async () => {
    await request(ApiUrl)
        .get('/localidades/distritos/352310705/')
        .expect(200)
        .then(response => {
            expect(response.body[0].municipio.microrregiao.nome).toEqual('Mogi das Cruzes')
        })
})


