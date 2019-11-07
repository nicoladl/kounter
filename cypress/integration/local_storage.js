/// <reference types="Cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy
      .visit('/')
      .fixture('user_female').as('female')
  })

  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('Fill a new item into localStorage', () => {
    // clearLocalStorage() yields the localStorage object
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
            .should(() => {
              expect(localStorage.getItem('test')).to.eq(`{"name":{"value":"${female.name}","visibleOnProfile":false},"slug":{"value":"${female.name}","visibleOnProfile":false},"weight":{"value":"${female.weight}","visibleOnProfile":true},"gender":{"value":"${female.gender}","visibleOnProfile":true},"age":{"value":"${female.age}","visibleOnProfile":true},"height":{"value":"${female.height}","visibleOnProfile":true},"basalMetabolism":{"value":1598,"visibleOnProfile":true}}`)
            })
        })
      })
  })

  it('Fill and clear localStorage', () => {
    cy.get('@female')
      .then(female => {
        // check if the localStorage is null after a delete  
        cy
          .get('input[name=name]').type(female.name)
          .get('select[name=gender]').select(female.gender)
          .get('input[name=age]').type(female.age)
          .get('input[name=weight]').type(female.weight)
          .get('input[name=height]').type(female.height)
          .get('form').submit()
          .clearLocalStorage(female.name).should((ls) => {
            expect(ls.getItem('test')).to.be.null
          })
      })
  })
})