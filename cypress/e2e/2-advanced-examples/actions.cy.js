describe('Pet Tests', () => {

  it('Add a New Pet', () => {
    const dogBody = {
      "id": 907,
      "category": {
        "id": 71,
        "name": "dog"
      },
      "name": "Beagle",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 711,
          "name": "Gary"
        }
      ],
      "status": "available"
    }
    cy.request({
      method: 'POST',
      url: "https://petstore.swagger.io/v2/pet",
      body: dogBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By ID', () => {
    cy.request('GET', "https://petstore.swagger.io/v2/pet/907")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By ID 404', () => {
    cy.request({
      method: 'GET',
      url: "https://petstore.swagger.io/v2/pet/9077",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Find Pet By ID 405', () => {
    cy.request({
      method: 'GET',
      url: "https://petstore.swagger.io/v2/pet/",
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

  it('Add a New Pet Parrot', () => {

    const birdBody = {
      "id": 908,
      "category": {
        "id": 72,
        "name": "bird"
      },
      "name": "Parrot",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 721,
          "name": "Papi"
        }
      ],
      "status": "sold"
    }

    cy.request({
      method: 'POST',
      url: "https://petstore.swagger.io/v2/pet",
      body: birdBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pet By Status', () => {
    cy.request('GET', "https://petstore.swagger.io/v2/pet/findByStatus?status=sold")
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Updates a Pet by ID', () => {

    const updateBody = {
      "name": "Beagle",
      "status": "sold"
    }

    const headerBody = {
      "accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }

    cy.request({
      method: 'POST',
      url: "https://petstore.swagger.io/v2/pet/907",
      body: updateBody,
      headers: headerBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Updates a Pet by Wrong ID', () => {

    const updateBody = {
      "name": "Beagle",
      "status": "sold"
    }

    const headerBody = {
      "accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }

    cy.request({
      method: 'POST',
      url: "https://petstore.swagger.io/v2/pet/9099",
      body: updateBody,
      headers: headerBody,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Update an Existing Pet', () => {

    const birdBody = {
      "id": 908,
      "category": {
        "id": 72,
        "name": "bird"
      },
      "name": "Parrot",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 721,
          "name": "Papi"
        }
      ],
      "status": "available"
    }

    cy.request({
      method: 'PUT',
      url: "https://petstore.swagger.io/v2/pet",
      body: birdBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update by Wrong ID', () => {

    const birdBody = {
      "id": "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
      "category": {
        "id": 72,
        "name": "bird"
      },
      "name": "Parrot",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 721,
          "name": "Papi"
        }
      ],
      "status": "available"
    }

    cy.request({
      method: 'PUT',
      url: "https://petstore.swagger.io/v2/pet",
      body: birdBody,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(500)
      })
  })

  it('Update Error', () => {

    const errorHeader = {
      "accept": "application/json",
      "Content-Type": "application/json"
    }

    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: errorHeader,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

  it('Delete a Pet', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/907')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete the Same Pet Again', () => {

    const samePetHeader = {
      "accept": "application/json"
    }

    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/907',
      headers: samePetHeader,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Delete Wrong', () => {

    const samePetHeader = {
      "accept": "application/json"
    }

    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: samePetHeader,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(405)
      })
  })

})