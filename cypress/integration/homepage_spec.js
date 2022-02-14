describe("Load homepage and render the Navigation Bar elements", () => {
  beforeEach( () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {"movies":[
        {"id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.625,"release_date":"2020-09-29"},
        {"id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"},
      ]}})
    .visit('http://localhost:3000') 
  });
  it("Should be able to visit the page and render the correct elements", () => {
    cy.contains("h1", "RancidTomatillos");
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
    cy.get('img[alt="Money Plane"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/694919")
      .go("back")
      .url()
      .should("eq", "http://localhost:3000/");
  });
  it("Should be able to click the forward button in the browser to go home", () => {
    cy.get('img[alt="Money Plane"')
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
    cy.get('input[type="text-box"]')
      .type("Mulan")
      .should("have.value", "Mulan")
      .get('img[alt="Mulan"]')
      .should("be.visible")
      .get('img[alt="Money Plane"]')
      .should("not.exist");
  });
  it("Should return an error message if searched movie is not found", () => {
    cy.get('input[type="text-box"]')
      .type("Mulane")
      .should("have.value", "Mulane")
      .get("p")
      .contains(
        "No movie found with that title. Please search for another movie."
      )
      .should("be.visible");
  });
  it("Should return an error message for a 404 movie not found", () => {
    cy.visit('http://localhost:3000/6949198') 
    .get("div.modal-failed-to-load-error")
    .contains(
      "Movie data failed to load. Please contact Comcast."
    )
  })
});