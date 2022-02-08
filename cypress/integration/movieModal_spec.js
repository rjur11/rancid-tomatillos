describe("Load homepage and render the Navigation Bar elements", () => {
  // it('Should be able to visit the page and render the correct elements', () => {
  //   cy.visit('http://localhost:3000')
  //   .contains('h1', 'RancidTomatillos');
  // });
  // it('Should render the search bar', () => {
  //   cy.get('input[type="text-box"]')
  //     .type('Mulan')
  //     .should('have.value', 'Mulan')
  //   });
  // it('Should render movie images', () => {
  //   cy.get('img[alt="Money Plane"]')
  //     .should('be.visible')
  //   });
  // it('Should render movie ratings', () => {
  //   cy.get('div.rating')
  //     .find("img")
  //     .should('be.visible')
  //   });
  // it('Should render movie year', () => {
  //   cy.get('h3.release-date-value')
  //     .should('be.visible')
  //   });
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
