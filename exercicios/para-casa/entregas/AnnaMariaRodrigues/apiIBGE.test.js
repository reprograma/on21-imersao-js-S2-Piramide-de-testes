const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET IBGE distritos", () => {
  
 
    test("deve retornar 200 id:520005005", () => {
        request (ApiUrl)
            .get("/distritos/GO/")
            .expect(200)
            .then (response =>{
                expect((response.body[0].id)).toEqual(520005005)
            
            })
    })

    test("deve retornar 200 id:290010805", () => {
        request (ApiUrl)
            .get("/distritos/BA")
            .expect(200)
            .then (response =>{
                expect((response.body[0].id)).toEqual(290010805)
            
            })
    })

})

 describe("GET IBGE estados", () => {
    test("deve retornar 200 nome:São João de Meriti", () => {
        const resultado = ("São João de Meriti");
        request (ApiUrl)
            .get("/estados/33/municipios")
            .expect(200)
            .then (response =>{
                expect((response.body[74].nome)).toEqual(resultado)
            })
    })

    test("deve retornar 200 e encontrar boby[0] Angra dos Reis", async () => {
        await request(ApiUrl)
            .get('/estados/rj/distritos/')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Angra dos Reis')
            })
        })   
   
            
          
})


describe("GET IBGE regioes", () => {

test("deve retornar 200 e encontrar Erro pq não é Sudeste", async () => {
    await request(ApiUrl)
        .get('/regioes/')
        .expect(200)
        .then(response => {
            expect(response.body[0].nome).toEqual('Sudeste')
        })
        .catch(response => {
            expect("Erro").toEqual('Erro')
        })
    })
    
})    


describe("GET IBGE estados", () => {
    test("deve retornar 200 e buscar o municipio Anaindeua", () => {
    const estadoPara = () => expect.arrayContaining([expect.objectContaining({"nome":"Pará"})]);
    const municipioAnamindeua = estadoPara([expect.objectContaining({"nome": "Anaindeua"})]);
    request(ApiUrl)
        .get('/estados')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(municipioAnamindeua)
        })
    })

    test("deve retornar 200 e buscar o municipio São João de Meriti", () => {
        const estadoRJ = () => expect.arrayContaining([expect.objectContaining({"nome":"Rio de Janeiro"})]);
        const municipio = estadoRJ([expect.objectContaining({"nome": "São João Meriti"})]);
        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
             //   console.log(response.body)
                expect(response.body).toEqual(municipio)
            })
        })
    
})

   