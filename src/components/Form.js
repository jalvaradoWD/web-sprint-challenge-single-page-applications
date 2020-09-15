import React, { useState, useEffect } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    size: "",
    sauce: "",
    toppings: [],
    specialInstructions: "",
    quantity: 0,
  });

  const onChange = (e) => {
    e.preventDefault();

    const targetName = e.target.name;
    const targetValue = e.target.value;

    setFormState({
      ...formState,
      [targetName]: targetValue,
    });
  };

  const sauceChecked = (e) => {
    setFormState({ ...formState, sauce: e.target.value });
  };

  const handleToppings = (e) => {
    const topping = e.target.value;
    const includedToppings = formState.toppings;

    if (!formState.toppings.includes(topping)) {
      setFormState({ ...formState, toppings: [...includedToppings, topping] });
    } else {
      setFormState({
        ...formState,
        toppings: includedToppings.filter(
          (appliedTopping) => appliedTopping !== topping
        ),
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form>
        <h2>Building Your Own Pizza</h2>

        <section>
          <div>
            <h3>Choice of Size</h3>
            <p>Required</p>
          </div>
          <select onChange={onChange} name="size" id="size">
            <option disabled={formState.sauce === "" ? false : true} value="">
              -- Select an option --
            </option>
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
              onChange={sauceChecked}
              defaultValue="originalRed"
              id="originalRed"
              type="radio"
              name="sauce"
            />
          </div>
          <div>
            <label htmlFor="garlicRanch">Garlic Ranch</label>
            <input
              onChange={sauceChecked}
              value="garlicRanch"
              id="garlicRanch"
              type="radio"
              name="sauce"
            />
          </div>
          <div>
            <label htmlFor="bbqSauce">BBQ Sauce</label>
            <input
              onChange={sauceChecked}
              value="bbqSauce"
              id="bbqSauce"
              type="radio"
              name="sauce"
            />
          </div>
          <div>
            <label htmlFor="spinachAlfredo">Spinach Alfredo</label>
            <input
              onChange={sauceChecked}
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
              onChange={handleToppings}
              type="checkbox"
              id="pepperoni"
              name="topping"
              value="pepperoni"
            />
            <label htmlFor="pepperoni">Pepperoni</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
              type="checkbox"
              id="sausage"
              name="topping"
              value="sausage"
            />
            <label htmlFor="sausage">Sausage</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
              type="checkbox"
              id="canadianBacon"
              name="topping"
              value="canadianBacon"
            />
            <label htmlFor="">Canadian Bacon</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
              type="checkbox"
              id="spicyItalian"
              name="topping"
              value="spicyItalian"
            />
            <label htmlFor="spicyItalian">Spicy Italian</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
              type="checkbox"
              id="onions"
              name="topping"
              value="onions"
            />
            <label htmlFor="onions">Onions</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
              type="checkbox"
              id="greenPepper"
              name="greenPepper"
              value="greenPepper"
            />
            <label htmlFor="greenPepper">Green Pepper</label>
          </div>
          <div>
            <input
              onChange={handleToppings}
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
            <input onChange={onChange} type="text" name="specialInstructions" />
          </div>
        </section>

        <section>
          <input
            onChange={onChange}
            type="number"
            name="quantity"
            min="1"
            max="5"
          />
        </section>
        <input type="submit" value="Add to Order" />
      </form>
    </div>
  );
};

export default Form;
