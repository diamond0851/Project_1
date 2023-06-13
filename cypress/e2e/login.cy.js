import {login,cart} from "../fixtures/selectors.js";

describe('Testing Login', () => {
  beforeEach ( () => {
    cy.visit ('/')
  })


  it.skip('Login - I should be able to login without empty fields', () => {
   cy.get (login.loginBtn).click()
   cy.get (login.emailField).type("odafefegor@gmail.com")
   cy.get(login.passwordField).type("Odafefegor33..")
   cy.get(login.loginBotton).click()


  })
})

describe ('Testing Cart', () => {
  beforeEach ( () => {
    cy.visit ('/')

  })

  it('Cart - I should be able to Order items', () => {
    cy.get(cart.item1).click()
    cy.wait(3000)
    cy.get(cart.buyNowBtn).click()
    cy.wait(3000)
    cy.get(cart.cartBtn).click()


  })
})