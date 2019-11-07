/// <reference types="Cypress" />

context('Food counter', () => {
  beforeEach(() => {
    cy
      .visit('/')
      .fixture('meal').as('meal')
      .fixture('user_female').as('female')
  })

  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('Add new meals to the profile', () => {
    // clearLocalStorage() yields the localStorage object

    cy.get('@female')
      .then(female => {
        // clear the localStorage and fill up the profile
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

    cy.get('@meal')
      .then(meal => {
        const totalKcal = meal.items.reduce((totalKcal, food) => totalKcal + food.kcal, 0)

        meal.items.map(food => {
          // fill the name
          cy
            .get('input[name=meal]').type(food.name)
            .should('have.value', food.name)

          // fill the kcal
          cy
            .get('input[name=kcal]').type(food.kcal)
            .should('have.value', `${food.kcal}`)

          // submit form
          cy
            .get('form').submit()
        })

        // check the total kcal
        cy
          .get('.total-kcal')
          .contains(totalKcal)

        cy.get('@female')
          .then(female => {
            // calculate the female metabolism
            const basalMetabolism = 665 + 9.6 * female.weight + 1.9 * female.height - 4.7 * female.age

            // check if the sum is correct
            cy
              .get('.total-sum')
              .contains(totalKcal - basalMetabolism)
          })
      })
  })
})