describe('Custom Cypress Commands', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('uses cy.getAllPosts()to retrieve all posts from the /api/posts endpoint', () => {
		// Create a custom Cypress Command called 'getAllPosts' which uses
		// cy.request() to get all of the posts from the /api/posts endpoint
		// Then use this custom command in this test to assert that the length of the posts
		// returned is equal to 2

		cy.getAllPosts().then((d) => {
			expect(d).to.have.length(2);
			cy.wrap(d).its('length').should('eq', 2);
		});
	});

	it('uses cy.getFirstPost() to retrieve the first post from the /api/posts endpoint', () => {
		// Create a custom Cypress Command called 'getFirstPost' which uses
		// cy.request() to get the first post from the /api/posts endpoint
		// Then use this custom command in this test to assert that the id of the first post
		// is equal to 'pre-rendering'

		cy.getFirstPost().then((d) => {
			expect(d.id).equal('pre-rendering');
			cy.wrap(d).its('id').should('eq', 'pre-rendering');
		});
	});
});
