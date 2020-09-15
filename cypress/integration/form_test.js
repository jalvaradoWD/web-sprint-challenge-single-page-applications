describe("Testing inputs on Form", () => {
  it("Visting the webisite", () => {
    const webiste = "http://localhost:3000/";

    cy.visit(webiste);
    cy.get("button").click();

    cy.get("select[name=size]").select("Large");
    cy.get("input[name=sauce][value=originalRed]").click();

    cy.get("input[name=topping][value=canadianBacon]").click();
    cy.get("input[name=topping][value=onions]").click();

    cy.get("input[name=specialInstructions]").type("Some Instructions");
    cy.get("input[type=number]").type(4);

    cy.get("input[type=submit]").click();
  });
});
