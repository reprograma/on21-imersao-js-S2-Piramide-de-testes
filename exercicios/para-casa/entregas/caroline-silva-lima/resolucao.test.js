const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
const ApiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/';

describe("GET /estados/{id}", () => {
    test("deve retornar 200 e encontrar o município de Colorado do Oeste/RO", () => {
        request(ApiUrl)
            .get("municipios/1100064")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Colorado do Oeste")
            })
    })
    test("deve retornar 200, uma vez que a API não contém previsão de 404 e, retornar um array vazio", () => {
        request(ApiUrl)
            .get("/municipios/cumu")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([])
            })
    })
})

describe("GET /municipios/{id}", () => {
    test("deve retornar 200 e um objeto com a região na qual o estado de Rondônia está inserido, informando id, sigla e nome da região", () => {
        request(ApiUrl)
            .get("estados/11")
            .expect(200)
            .then(response => {
                expect(response.body.regiao).toEqual({ id: 1, sigla: 'N', nome: 'Norte' })
            })
    })
    test("deve retornar 200 e retornar um  com a região na qual o estado de Rondônia está inserido, informando id, sigla e nome da região", () => {
        request(ApiUrl)
            .get("estados/11")
            .expect(200)
            .then(response => {
                expect(response.body.regiao.nome).toEqual('Norte')
            })
    })
})
