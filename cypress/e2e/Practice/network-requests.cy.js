/*
  It is very helpful to use console.log() to log out the response data
  in order to see the data you are working with.
  
  You can also click on the request in the Cypress Command Log for an even
  better experience.
*/
describe('Network Requests', () => {
	beforeEach(() => {
		// cy.intercept('GET', '/api/posts', (req) => {
		// 	console.log('Interceptor posts called');
		// 	// this is to disable browser caching
		// 	// https://glebbahmutov.com/blog/cypress-intercept-problems/
		// 	delete req.headers['if-none-match'];
		// }).as('posts');
		cy.visit('http://localhost:3000');
	});

	it('/api/posts returns a status code of 200', () => {
		// Write an assertion that the route '/api/posts'
		// returns a status code of 200
		// Hint: You will need to use cy.request()
		// https://docs.cypress.io/api/commands/request

		cy.request('GET', '/api/posts', (response) => {
			expect(response.status).to.eq(200);
		});
	});

	it('/api/posts returns the correct number of posts', () => {
		// Write an assertion that the route '/api/posts'
		// returns the correct number of posts.
		cy.request('GET', '/api/posts', (response) => {
			expect(response.body).to.have.length(2);
			expect(response.body.length).to.eq(2);
		});

		cy.getAllPosts().then((d) => {
			expect(d).to.have.length(2);
			cy.wrap(d).its('length').should('eq', 2);
		});
	});

	it('the posts.json fixture returns the correct number of posts', () => {
		// Write an assertion that the route '/api/posts'
		// returns the correct number of posts.
		// There are 25 total posts in the fixture
		// Hint: You will need to use cy.fixture()
		// https://docs.cypress.io/api/commands/fixture

		cy.fixture('posts').then((response) => {
			expect(response).to.have.length(25);
			expect(response.length).to.eq(25);
		});
	});

	it.only('intercepts /api/posts and returns the correct number of posts', () => {
		// Wait upon the @posts intercept that happens in the beforeEach()
		// and assert that the response contains the correct number of posts
		// Hint: you will need to cy.wait() to wait upon the @posts alias.
		// https://docs.cypress.io/api/commands/wait
		// cy.wait('@posts').then((d) => {
		// 	console.log({ d });
		// 	// expect(d.length).to.eq(2);
		// });
		// cy.wait('@posts').then((response) => {
		// 	console.log({ response });
		// 	cy.wrap(response).its('response.body').should('have.length', 2);
		// });
		// cy.intercept('POST', '/api/posts', (req) => {
		// 	console.log('Interceptor  post2 called');
		// 	delete req.headers['if-none-match'];
		// }).as('post2');
		// cy.wait('@post2').then((response) => {
		// 	console.log({ response });
		// 	cy.wrap(response).its('response.body').should('have.length', 2);
		// });
		// cy.wait('@posts').then((response) => {
		// 	console.log({ response });
		// 	cy.wrap(response).its('response.body').should('have.length', 2);
		// });
		// cy.intercept({
		// 	method: 'GET',
		// 	url: '/api/posts'
		// }).as('apiCheck');
		// cy.request('http://localhost:3000/api/posts');
		// cy.wait('@apiCheck').then((interception) => {
		// 	assert.isNotNull(interception.response.body, '1st API call has data');
		// });
		// cy.wait('@apiCheck').then((interception) => {
		// 	assert.isNotNull(interception.response.body, '2nd API call has data');
		// });
		// cy.wait('@apiCheck').then((interception) => {
		// 	assert.isNotNull(interception.response.body, '3rd API call has data');
		// });
	});

	// it.only('intercepts /api/posts and returns the correct number of posts', () => {
	// 	cy.intercept('GET', '/api/posts', (req) => {
	// 		console.log('Interceptor  post2 called');
	// 		delete req.headers['if-none-match'];
	// 	}).as('post2');
	// 	cy.request('http://localhost:3000/api/posts');
	// 	cy.wait('@post2').then((response) => {
	// 		console.log({ response });
	// 		cy.wrap(response).its('response.body').should('have.length', 2);
	// 	});
	// });
});

// describe('Network Requests 2', () => {
// 	beforeEach(() => {
// 		cy.intercept('GET', '/api/posts').as('post');
// 		cy.visit('http://localhost:3000');
// 	});

// 	it.only('intercepts /api/posts and returns the correct number of posts', () => {
// 		// cy.wait('@post').then((interception) => {
// 		// 	expect(interception.response.statusCode).to.equal(200);
// 		// 	expect(interception.response.body).to.have.length(2);
// 		// 	// Additional assertions or actions related to the intercepted request
// 		// });
// 		cy.wait('@post', { timeout: 10000 }).its('response.body').should('have.length', 2);
// 	});
// });

// describe('Network Requests 2', () => {
// 	it.only('intercepts /api/posts and returns the correct number of posts', () => {
// 		cy.intercept('/api/posts').as('posts');
// 		cy.visit('http://localhost:3000');

// 		// Trigger the request manually
// 		cy.request('/api/posts');

// 		// Wait for the request to be intercepted
// 		cy.wait('@posts', { timeout: 10000 }).then((interception) => {
// 			expect(interception.response.statusCode).to.equal(200);
// 			expect(interception.response.body).to.have.length(2);
// 			// Additional assertions or actions related to the intercepted request
// 		});
// 	});
// });
