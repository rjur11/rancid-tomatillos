describe("Load homepage and render the Navigation Bar elements", () => {
  it("Should be able to visit the page and render the correct elements", () => {
    cy.visit("http://localhost:3000").contains("h1", "RancidTomatillos");
  });
  it("Should render movie images", () => {
    cy.get('img[alt="Money Plane"]').should("be.visible");
  });
  it("Should render movie ratings", () => {
    cy.get("div.rating").find("img").should("be.visible");
  });
  it("Should render movie year", () => {
    cy.get("h2.release-date-value").should("be.visible");
  });
  it("Should go to movie modal view when movie button is clicked", () => {
    cy.get('img[alt="Money Plane"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/694919");
  });
  it("Should be able to click the back button in the browser to go home", () => {
    cy.visit("http://localhost:3000")
      .get('img[alt="Money Plane"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/694919")
      .go("back")
      .url()
      .should("eq", "http://localhost:3000/");
  });
  it("Should be able to click the forward button in the browser to go home", () => {
    cy.visit("http://localhost:3000")
      .get('img[alt="Money Plane"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/694919")
      .go("back")
      .url()
      .should("eq", "http://localhost:3000/")
      .go("forward")
      .url()
      .should("eq", "http://localhost:3000/694919");
  });
  it("Should return movie search results", () => {
    cy.visit("http://localhost:3000")
      .get('input[type="text-box"]')
      .type("Mulan")
      .should("have.value", "Mulan")
      .get('img[alt="Mulan"]')
      .should("be.visible")
      .get('img[alt="Money Plane"]')
      .should("not.exist");
  });
  it("Should return an error message if searched movie is not found", () => {
    cy.visit("http://localhost:3000")
      .get('input[type="text-box"]')
      .type("Mulane")
      .should("have.value", "Mulane")
      .get("p")
      .contains(
        "No movie found with that title. Please search for another movie."
      )
      .should("be.visible");
  });
});
