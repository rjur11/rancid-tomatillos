describe("Load homepage and render the Navigation Bar elements", () => {
  beforeEach( () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {"movies":[
        {"id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.625,"release_date":"2020-09-29"},
        {"id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"},
      ]}})
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 201,
      body: {"movie": {
        "id":694919,
        "title":"Money Plane",
        "poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date":"2020-09-29","overview":"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres":["Action"],
        "budget":0,
        "revenue":0,
        "runtime":82,
        "tagline":"",
        "average_rating":6.625}}
    })
    .visit('http://localhost:3000/694919') 
  });
  it("Should be able to visit the modal page and render the correct elements", () => {
    cy.contains("h2", "Money Plane");
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