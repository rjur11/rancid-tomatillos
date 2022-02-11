describe("Load homepage and render the Navigation Bar elements", () => {
  it("Should be able to visit the modal page and render the correct elements", () => {
    cy.visit("http://localhost:3000/694919").contains("h2", "Money Plane");
  });
  it("Should render a movie image", () => {
    cy.get('img[alt="Money Plane"]').should("be.visible");
  });
  it("Should render movie runtime value", () => {
    cy.visit("http://localhost:3000/694919").contains(
      "h3.runtime-value",
      "82 minutes"
    );
  });
  it("Should render movie release date year value", () => {
    cy.visit("http://localhost:3000/694919").contains(
      "h3.modal-release-date-value",
      "2020"
    );
  });
  it("Should render movie description", () => {
    cy.visit("http://localhost:3000/694919").contains(
      "h3.description-value",
      "Description: A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
    );
  });
  it("Should render movie ratings", () => {
    cy.get("div.rating").find("img").should("be.visible");
  });
  it("Should render movie genres", () => {
    cy.visit("http://localhost:3000/694919").contains(
      "h3.genre-value",
      "Action"
    );
  });
  it("Should should show an exit button", () => {
    cy.visit("http://localhost:3000/694919");
    cy.get("a.exit-modal").should("be.visible");
  });
  it("Should go back to homepage when exit button is clicked", () => {
    cy.get("a.exit-modal").click().url().should("eq", "http://localhost:3000/");
  });
});

// it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
//   cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
//       statusCode: 201,
//       body: {
//         id: 2,
//         image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
//         name: "Leta Keane"
//       }
//     })
//     .get('input[type="email"]').type('leta@turing.io')
//     .get('input[type="password"]').type('keane20')
//     .get('button').click()
//     .url().should('include', '/dashboard')
// });
