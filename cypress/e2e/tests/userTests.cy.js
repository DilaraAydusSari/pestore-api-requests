import UserData from "../data-helper/userData";
import Params from "../data-helper/params";

describe('User Tests', () => {

    const userData = new UserData;
    const params = new Params;
    var url = params.url();

    it('/v2/user createUser', () => {
        cy.request({
            method: 'POST',
            url: url + '/v2/user',
            body: userData.bodyPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/selim getUser', () => {
        cy.request('GET', url + '/v2/user/selim')
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/selim updateUser', () => {
        cy.request({
            method: 'PUT',
            url: url + '/v2/user/selim',
            body: userData.uploadPayload(456, "can@email.com", "1", "555")
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/selim nullUpdateUser', () => {
        cy.request({
            method: 'PUT',
            url: url + "/v2/pet",
            headers: userData.headerPayload(),
            failOnStatusCode: false
          })
            .then((response) => {
              expect(response.status).to.eq(405) //Method Not Allowed
            })
    })

    it('/v2/user/selim deleteUser', () => {
        cy.request({
            method: 'DELETE',
            url: url + '/v2/user/selim',
            headers: userData.headerPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/login', () => {
        cy.request({
            method: 'GET',
            url: url + '/v2/user/login',
            query: userData.userSing("selim", "123456asd")
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/logout', () => {
        cy.request({
            method: 'GET',
            url: url + '/v2/user/logout',
            headers: userData.headerPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/createWithList', () => {
        cy.request({
            method: 'POST',
            url: url + '/v2/user/createWithList',
            body: userData.listPostData()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('/v2/user/createWithArray', () => {
        cy.request({
            method: 'POST',
            url: url + '/v2/user/createWithArray',
            body: userData.arrayPostData(),
            headers: userData.headerPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

})