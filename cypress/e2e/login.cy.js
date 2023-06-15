import {login,cart,search,ContactUs} from "../fixtures/selectors.js";

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

  it.skip('Cart - I should be able to Order items', () => {
    cy.get(cart.item1).click()
    cy.wait(3000)
    cy.get(cart.buyNowBtn).click()
    cy.get(cart.continueShoppingBtn).click()
    cy.get(cart.cartBtn).click()
    cy.get(cart.continueToCheckoutBtn).click()


  })
})
describe ('Testing search', () => {
  beforeEach ( () => {
    cy.visit ('/')

  })
it.skip('Search - I should be able to search for different brands of goods', () => {
   cy.get(search.searchField).type("iphone")
   cy.wait(3000)
   cy.get(search.searchBtn).click()
   cy.wait(5000)
   cy.get(search.searchField).clear()
   cy.get(search.searchField).type("macbook")
   cy.wait(3000)
   cy.get(search.searchBtn).click()


  })

})