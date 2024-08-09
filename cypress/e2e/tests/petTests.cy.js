import PetData from "../data-helper/petData";
import Params from "../data-helper/params";


describe('Pet Tests', () => {

  const petData = new PetData;
  const params = new Params;
  var url = params.url();

  it('/v2/pet addPet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: petData.dogData()
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
        expect(response.status).to.eq(404) //Not Found
      })
  })

  it('/v2/pet/9077 getNullId', () => {
    cy.request({
      method: 'GET',
      url: url + "/v2/pet/",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405) //Method Not Allowed
      })
  })

  it('/v2/pet addSecondPet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: petData.birdData()
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
      body: petData.updateFormData(),
      headers: petData.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet/9099 updateWrongId', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet/9099",
      body: petData.updateFormData(),
      headers: petData.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404) //Not Found
      })
  })

  it('/v2/pet updateExistingPet', () => {
    cy.request({
      method: 'PUT',
      url: url + "/v2/pet",
      body: petData.updateStatusData("available")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('/v2/pet updateErrorId', () => {
    cy.request({
      method: 'PUT',
      url: url + "/v2/pet",
      body: petData.updateWrongId("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(500) //Server Error
      })
  })

  it('/v2/pet deleteError', () => {

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet',
      headers: petData.errorHeaderPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405) //Method Not Allowed
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
      headers: petData.samePetHeaderPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404) //Not Found
      })
  })

})