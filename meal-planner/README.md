# Meal Planner with Macros

Keep track of your Total Daily Energy Expenditure(TDEE), plan your meals for the week, and manage a collection of recipes with their macronutrients.

## Screenshots

- Weekly meal planner
  ![Planner](https://github.com/kr222/sei-projects/assets/59068114/a3f33a0d-e10b-4a4f-92a4-0662df92eb17)

- Editing a meal in the planner
  ![Edit meal](https://github.com/kr222/sei-projects/assets/59068114/3e0b045d-3657-42fb-94b8-93c7c742a145)

- Recipe list with macronutrients
  ![Recipes](https://github.com/kr222/sei-projects/assets/59068114/628dff53-5d46-4b99-9d22-7fd012bc14c5)

- Getting ingredient macronutrient information
  ![Get macros](https://github.com/kr222/sei-projects/assets/59068114/03ab61c3-31bd-427f-952c-d807659f5fb4)

- Editing a recipe in the recipe list
  ![Edit recipe](https://github.com/kr222/sei-projects/assets/59068114/8aa2e887-6350-4c77-8dae-9acd445d405a)

- Wireframe
  ![wireframe](https://github.com/kr222/sei-projects/assets/59068114/bddae465-1268-4a4a-b881-6b23b856d486)

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Bootstrap
- AirTable

## Getting Started

1. The user starts at the "Weekly meal planner" page, where planned meals for breakfast, lunch and dinner are displayed for all days of the week
2. [Calculate your TDEE](https://tdeecalculator.net/), then insert the required macronutrient values into the TDEE display on the left. Click the button on the right of the input to save
3. Click on any meal in the grid to edit the meal, then click save.
4. The edited meal should appear in place of the original meal

5. Navigate to the recipe list via the navbar at the top right
6. Opening it will show an ingredient macronutrient search, and a list of meals with their macros
7. Create a new recipe by clicking the button on the left
8. Search for an ingredient's macronutrient values by inputting the weight in grams, and the name of the ingredient.
9. Clicking "Get macros" will display the macronutrient values of the ingredient, if available
10. Select a recipe to add the ingredient to, and click "add to meal" to add the ingredient, along with its macronutrients to the meal
11. Click done to close the editor
12. To edit or delete an existing recipe, click its name to edit the name, ingredients, and macronutrients values, or delete it

## Icebox Items

- Macro Tally: be able to tell if planned meals meet daily TDEE requirements without manually calculating each individual item
- TDEE Calculator: Calculate TDEE based on my height, weight, body fat %, and daily fitness activity on the same page as the planner
- Pictures of meals in planner and recipe view
- Inventory of groceries and ingredients that decreases with each meal to know when to go grocery shopping
- Meal preparation instructions saved within each meal

## References

### Knowledge

- Desmond + TAs
- user-language lab, <Routes />, <Route />, and <NavBar/> notes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
- https://react.dev/reference/react-dom/components/option

### Resources and assets

- https://fonts.google.com/
- [List CSS styling](https://freefrontend.com/css-lists/page/2/)
- [Food-themed favicon](https://icons-for-free.com/food+health+nutrition+orange+icon-1320168729336562544/)
- [Wireframe](https://app.diagrams.net/)

### APIs

- AirTable developer documentation
- [Macronutrients API](https://api-ninjas.com/api/nutrition)

## Presentation notes

### Noteworthy code

- `<WeekPlan.jsx />` line 14-62 :

```
const [myMentalState, setMyMentalState] = useState('becoming insane')

const handleSanity = (e) => {
takeNap(e.target.value)
}
```

line 269-464:

```
props={I HAVE 105 PROPS HERE}
lifts={21 OF THEM ARE LIFTS}

```

---

- `<EditMeal.jsx />` line 19-40 :

```
this ||
that ||
the other
```

---

- `<MealItem.jsx />` line 81-103:

```
const prop=(props)=>{
  props.proppingProps
}

```

---

- `<Macros.jsx />` line 96-102:

```
JSON.stringify(
    thing.toString()
    )
```
