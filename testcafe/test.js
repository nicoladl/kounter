import { Selector } from 'testcafe';
import config from './config';

const female = require('./data/user_female.json');
const meal = require('./data/meal.json');

const nameInput = Selector('input[name=name]');
const genderInput = Selector('select[name=gender]');
const genderOption = genderInput.find('option');
const ageInput = Selector('input[name=age]');
const heightInput = Selector('input[name=height]');
const weightInput = Selector('input[name=weight]');

const submit = Selector('button[type=submit]');

fixture`Kounter App`
  .page`${config.baseUrl}`;

test('Check the redirect to page profile', async t => {
  await t.eval(() => localStorage.clear())
  await t
    .typeText(nameInput, female.name)
    .click(genderInput)
    .click(genderOption.withText(`${female.gender}`))
    .typeText(ageInput, `${female.age}`)
    .typeText(weightInput, `${female.weight}`)
    .typeText(heightInput, `${female.height}`)
    .click(submit)
    .navigateTo(`${config.baseUrl}/counter/${female.name}`);
});

test('Compile form and test required fields', async t => {
  await t.eval(() => localStorage.clear())
  await t
    .typeText(nameInput, female.name)
    .click(genderInput)
    .click(genderOption.withText(`${female.gender}`))
    .typeText(ageInput, `${female.age}`)
    .typeText(weightInput, `${female.weight}`)
    .typeText(heightInput, `${female.height}`)
    .click(submit)
    .expect(`li[data-key="${female.gender}"]`).contains(female.gender)
    .expect(`li[data-key="${female.age}"]`).contains(female.age)
    .expect(`li[data-key="${female.height}"]`).contains(female.height)
    .expect(`li[data-key="${female.weight}"]`).contains(female.weight)
});

test('Add new meal to the profile', async t => {
  await t
    .typeText(nameInput, female.name)
    .click(genderInput)
    .click(genderOption.withText(`${female.gender}`))
    .typeText(ageInput, `${female.age}`)
    .typeText(weightInput, `${female.weight}`)
    .typeText(heightInput, `${female.height}`)
    .click(submit)

  // const totalKcal = meal.items.reduce((totalKcal, food) => totalKcal + food.kcal, 0)
  const basalMetabolism = 665 + 9.6 * female.weight + 1.9 * female.height - 4.7 * female.age

  await t
    .typeText('input[name=meal]', `${meal.items[0].name}`)
    .typeText('input[name=kcal]', `${meal.items[0].kcal}`)
    .click(submit)
    .expect(Selector('.total-kcal').textContent).eql('500')
  // .expect(Selector('.total-sum').innerText).eql(Selector('.meal-kcal').innerText - basalMetabolism)

  // meal.items.map(food => {
  //   console.log(food)
  //   await t
  //     .typeText('input[name=mealo]', `${food.name}`)
  //     .expect('input[name=meal]').eql(`${food.name}`)
  //     .typeText('input[name=kcal]', `${food.kcal}`)
  //     .expect('input[name=kcal]').eql(`${food.kcal}`)
  //     .click(submit)
  //     .expect('.total-kcal').eql(totalKcal)
  //     .expect('.total-sum').eql(totalKcal - basalMetabolism);
  // })
});