const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api"
    //Query Builder da pagina gera a url

describe('Dado GET /docs/localidades', () => {

    test('retorna 200 quando buscar pelo municipio de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome":"Ananindeua" })])

        request(ApiUrl)
            .get('/estados')//Aqui pode ser endpoint PA e retirar a consta estado para
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
        });
        
        test('retorna 404', () => {
            request(ApiUrl)
            .get('/error')
            .expect(404, {
                errors: [
                    {
                        code: 'PAGE_NOT_FOUND',
                        message: 'Página não encontrada',
                        status: 404,
                    },
                ]
            })           
        });
});

describe("GET /docs/localidades/estados/{UF}/mesorregioes", () => {
    
    test("deve retornar Mesorregiões pelo Estado de São Paulo", () => {
      request(ApiUrl)
        .get("/estados/sp/mesorregioes")
        .expect(200)
        .then((response) => {
          expect(response.body).toBeCalledWith(expect.anything());
        });
    });

    test('Retorna 404', () => {
        request(ApiUrl)
        .get('/estados/saopaulo/mesorregioes')
        .expect(404, {
            errors: [
                {
                    code: 'PAGE_NOT_FOUND',
                    message: 'Página não encontrada',
                    status: 404,
                },
            ]
        })           
    });
});


describe('GET /v1/localidades/distritos', () => {
    test('Deve retornar o distrito de Abadia de Goiás',() => {
        request(ApiUrl)
        .get('/520005005')
        .expect(200)
        .then((response) => {
            expect(response.body[0].nome).toEqual("Abadia de Goiás")
        })
    });

    test('Retorna 404', () => {
        request(ApiUrl)
        .get('/abadia_de_goias')
        .expect(404, {
            errors: [
                {
                    code: 'PAGE_NOT_FOUND',
                    message: 'Página não encontrada',
                    status: 404,
                },
            ]
        })           
    });
})

describe('GET /v1/localidades', () => {

test('Deve retornar municipio de Alta Floresta D Oeste', () => {
    const estadoRondonia = () => expect.arrayContaining([expect.objectContaining({ "id": 1100015 })])
    const municipioAltaFlorestaDOeste = estadoRondonia([expect.objectContaining({ "nome":"Alta Floresta D'Oeste" })])

    request(ApiUrl)
        .get('/municipios')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(municipioAltaFlorestaDOeste)
        })
    });
})


