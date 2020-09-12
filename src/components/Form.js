import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <h2>Building Your Own Pizza</h2>

        <section>
          <div>
            <h3>Choice of Size</h3>
            <p>Required</p>
          </div>
          <select name="size" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extraLarge">Extra Large</option>
          </select>
        </section>

        <section>
          <div>
            <h3>Choice of Sauce</h3>
            <p>Required</p>
          </div>
          <div>
            <label htmlFor="originalRed">Original Red</label>
            <input
              value="originalRed"
              id="originalRed"
              type="radio"
              name="sauce"
            />
          </div>
          <div>
            <label htmlFor="garlicRanch">Garlic Ranch</label>
            <input
              value="garlicRanch"
              id="garlicRanch"
              type="radio"
              name="sauce"
            />
          </div>
          <div>
            <label htmlFor="bbqSauce">BBQ Sauce</label>
            <input value="bbqSauce" id="bbqSauce" type="radio" name="sauce" />
          </div>
          <div>
            <label htmlFor="spinachAlfredo">Spinach Alfredo</label>
            <input
              value="spinachAlfredo"
              id="spinachAlfredo"
              type="radio"
              name="sauce"
            />
          </div>
        </section>

        <section>
          <div>
            <h3>Add Toppings</h3>
            <p>Choose up to 10</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="pepperoni"
              name="pepperoni"
              value="pepperoni"
            />
            <label htmlFor="pepperoni">Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sausage"
              name="sausage"
              value="sausage"
            />
            <label htmlFor="sausage">Sausage</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canadianBacon"
              name="canadianBacon"
              value="canadianBacon"
            />
            <label htmlFor="">Canadian Bacon</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="spicyItalian"
              name="spicyItalian"
              value="spicyItalian"
            />
            <label htmlFor="spicyItalian">Spicy Italian</label>
          </div>
          <div>
            <input type="checkbox" id="onions" name="onions" value="v" />
            <label htmlFor="onions">Onions</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="greenPepper"
              name="greenPepper"
              value="greenPepper"
            />
            <label htmlFor="greenPepper">Green Pepper</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="grilledChicken"
              name="grilledChicken"
              value="grilledChicken"
            />
            <label htmlFor="">Grilled Chicken</label>
          </div>
        </section>

        <section>
          <div>
            <h3>Special Instructions</h3>
            <input type="text" name="specialInstructions" />
          </div>
        </section>

        <section>
          <input type="number" name="quantity" min="1" max="5" />
          <input type="submit" value="Add to Order" />
        </section>
      </form>
    </div>
  );
};

export default Form;
