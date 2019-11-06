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

  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('Fill a new item into localStorage', () => {
    // clearLocalStorage() yields the localStorage object
    cy.clearLocalStorage().should((ls) => {
      cy
        .get('input[name=name]').type(allFields.name)
        .get('select[name=gender]').select(allFields.gender)
        .get('input[name=age]').type(allFields.age)
        .get('input[name=weight]').type(allFields.weight)
        .get('input[name=height]').type(allFields.height)
        .get('form').submit()
        .should(() => {
          expect(localStorage.getItem('test')).to.eq(`{"name":{"value":"${allFields.name}","visibleOnProfile":false},"slug":{"value":"${allFields.name}","visibleOnProfile":false},"weight":{"value":"${allFields.weight}","visibleOnProfile":true},"gender":{"value":"${allFields.gender}","visibleOnProfile":true},"age":{"value":"${allFields.age}","visibleOnProfile":true},"height":{"value":"${allFields.height}","visibleOnProfile":true},"basalMetabolism":{"value":1598,"visibleOnProfile":true}}`)
        })
    })
  })

  it('Fill and clear localStorage', () => {
    cy
      .get('input[name=name]').type(allFields.name)
      .get('select[name=gender]').select(allFields.gender)
      .get('input[name=age]').type(allFields.age)
      .get('input[name=weight]').type(allFields.weight)
      .get('input[name=height]').type(allFields.height)
      .get('form').submit()
      .clearLocalStorage(allFields.name).should((ls) => {
        expect(ls.getItem('test')).to.be.null
      })
  })
})