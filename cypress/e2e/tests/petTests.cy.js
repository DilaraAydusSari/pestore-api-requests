import Data from "../data-helper/data"
import Params from "../data-helper/params";

describe('Pet Tests', () => {

  const data = new Data;
  const params = new Params;
  var url = params.url();

  it('/v2/pet addPet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: data.dogData()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/907 getId', () => {
    cy.request('GET', url + "/v2/pet/907")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/9077 getId', () => {
    cy.request({
      method: 'GET',
      url: url + "/v2/pet/9077",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('/v2/pet/9077 getNullId', () => {
    cy.request({
      method: 'GET',
      url: url + "/v2/pet/",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

  it('/v2/pet addSecondPet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: data.birdData()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/findByStatus?status=sold getStatus', () => {
    cy.request('GET', url + "/v2/pet/findByStatus?status=sold")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/907 updatePet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet/907",
      body: data.updateFormData(),
      headers: data.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/9099 updateWrongId', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet/9099",
      body: data.updateFormData(),
      headers: data.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('/v2/pet updateExistingPet', () => {
    cy.request({
      method: 'PUT',
      url: url + "/v2/pet",
      body: data.updateStatusData("available")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet updateErrorId', () => {
    cy.request({
      method: 'PUT',
      url: url + "/v2/pet",
      body: data.updateWrongId("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(500)
      })
  })

  it('/v2/pet deleteError', () => {

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet',
      headers: data.errorHeaderPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

  it('/v2/pet/907 deletePet', () => {
    cy.request('DELETE', url + '/v2/pet/907')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/907 deleteSamePet', () => {
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/907',
      headers: data.samePetHeaderPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('/v2/pet deleteNull', () => {
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet',
      headers: data.samePetHeaderPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

})