describe('Common commands', () => {
	context('its', () => {
		it('its command', () => {
			cy.wrap(['Wai Yan', 'Yu']).its(1).should('eq', 'Yu'); // true
			cy.wrap({ age: 52 }).its('age').should('eq', 52); // true
			cy.wrap([{ age: 1 }, { age: 2 }])
				.its(0)
				.its('age')
				.should('eq', 1); // true
		});
	});

	context('invoke', () => {
		beforeEach(() => {
			cy.intercept('GET', '/api/posts').as('posts');
			cy.visit('http://localhost:3000');
		});

		it('slices the users returned from /api/posts endpoint using invoke', () => {
			cy.request('http://localhost:3000/api/posts').then((response) => {
				cy.wrap(response).its('body').invoke('slice', 0, 1);
			});
			// ...
		});
	});

	context('request', () => {
		beforeEach(() => {
			cy.intercept('GET', '/api/posts').as('posts');
			cy.visit('http://localhost:3000');
		});

		it('testing out request', () => {
			cy.request('http://localhost:3000/api/posts').then((response) => {
				cy.wrap(response).its('body').invoke('slice', 0, 1);
			});
			// ...
		});

		it('testing out request', () => {
			cy.request('POST', 'http://localhost:3000/api/posts', { name: 'Jane' }).then((response) => {
				// expect(response.isOkStatusCode).to.have.property('name', 'Jane'); // true
				expect(response.status).to.eq(200);
			});
		});
	});

	context('within', () => {
		beforeEach(() => {
			cy.intercept('GET', '/api/posts').as('posts');
			cy.visit('http://localhost:3000');
		});

		it('testing out .within', () => {
			cy.get('[data-test="posts-list"]').within(($post) => {
				cy.get('a').should('have.length', 2);
			});
		});
	});
});
