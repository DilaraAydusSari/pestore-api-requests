import Data from "../data-helper/data"
import Params from "../data-helper/params";

describe('Pet Tests', () => {

  const data = new Data;
  const params = new Params;
  var url = params.url();

  it('Add a New Pet', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: data.dogData()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By ID', () => {
    cy.request('GET', url + "/v2/pet/907")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By ID 404', () => {
    cy.request({
      method: 'GET',
      url: url + "/v2/pet/9077",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Find Pet By ID 405', () => {
    cy.request({
      method: 'GET',
      url: url + "/v2/pet/",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

  it('Add a New Pet Parrot', () => {
    cy.request({
      method: 'POST',
      url: url + "/v2/pet",
      body: data.birdData()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By Status', () => {
    cy.request('GET', url + "/v2/pet/findByStatus?status=sold")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Updates a Pet by ID', () => {
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

  it('Updates a Pet by Wrong ID', () => {
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

  it('Update an Existing Pet', () => {
    cy.request({
      method: 'PUT',
      url: url + "/v2/pet",
      body: data.updateStatusData("available")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update by Wrong ID', () => {
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

  it('Update Error', () => {

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

  it('Delete a Pet', () => {
    cy.request('DELETE', url + '/v2/pet/907')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete the Same Pet Again', () => {
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

  it('Delete Wrong', () => {
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