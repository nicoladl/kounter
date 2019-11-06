/// <reference types="Cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
  })

  const allFields = {
    name: 'test',
    gender: 'female',
    age: 50,
    weight: 90,
    height: 160
  }

  it('check the redirect to page profile', () => {
    cy.clearLocalStorage().should((ls) => {
      cy
        .get('input[name=name]').type(allFields.name)
        .get('select[name=gender]').select(allFields.gender)
        .get('input[name=age]').type(allFields.age)
        .get('input[name=weight]').type(allFields.weight)
        .get('input[name=height]').type(allFields.height)
        .get('form').submit()
        .url().should('include', `/counter/${allFields.name}`)
    })
  })

  it('compile form and test required fields', () => {
    cy.clearLocalStorage().should((ls) => {
      cy
        .get('input[name=name]').type(allFields.name)
        .get('select[name=gender]').select(allFields.gender)
        .get('input[name=age]').type(allFields.age)
        .get('input[name=weight]').type(allFields.weight)
        .get('input[name=height]').type(allFields.height)
        .get('form').submit()
        .get(`li[data-key="${allFields.gender}"]`).contains(allFields.gender)
        .get(`li[data-key="${allFields.age}"]`).contains(allFields.age)
        .get(`li[data-key="${allFields.weight}"]`).contains(allFields.weight)
        .get(`li[data-key="${allFields.height}"]`).contains(allFields.height)
    })
  })
})
