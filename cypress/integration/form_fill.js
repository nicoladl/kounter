/// <reference types="Cypress" />

context('Form', () => {
  beforeEach(() => {
    cy.visit('/')
      .fixture('user_female').as('female')
  })

  it('check the redirect to page profile', () => {
    cy.get('@female')
      .then(female => {
        cy.clearLocalStorage().should((ls) => {
          cy
            .get('input[name=name]').type(female.name)
            .get('select[name=gender]').select(female.gender)
            .get('input[name=age]').type(female.age)
            .get('input[name=weight]').type(female.weight)
            .get('input[name=height]').type(female.height)
            .get('form').submit()
            .url().should('include', `/counter/${female.name}`)
        })
      })
  })

  it('compile form and test required fields', () => {
    cy.get('@female')
      .then(female => {
        // clear the localStorage and fill up the profile
        cy.clearLocalStorage().should((ls) => {
          // check if the list is valorized
          cy
            .get('input[name=name]').type(female.name)
            .get('select[name=gender]').select(female.gender)
            .get('input[name=age]').type(female.age)
            .get('input[name=weight]').type(female.weight)
            .get('input[name=height]').type(female.height)
            .get('form').submit()
            .get(`li[data-key="${female.gender}"]`).contains(female.gender)
            .get(`li[data-key="${female.age}"]`).contains(female.age)
            .get(`li[data-key="${female.weight}"]`).contains(female.weight)
            .get(`li[data-key="${female.height}"]`).contains(female.height)
        })
      })
  })
})
