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
        .wrap(`li[data-key="${allFields.gender}"]`).should('include', allFields.gender)
        .wrap(`li[data-key="${allFields.age}"]`).should('include', allFields.age)
        .wrap(`li[data-key="${allFields.weight}"]`).should('include', allFields.weight)
        .wrap(`li[data-key="${allFields.height}"]`).should('include', allFields.height)
    })
  })
})
