const { _ } = Cypress;
import { format, parseISO } from 'date-fns';

const sortedPosts = (posts) => {
	return posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
};

describe('Cypress is just JavaScript', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('uses _.each() from lodash to make sure the titles from the posts api are displayed correctly on the home page', () => {
		// Use _.each() from lodash to iterate over the posts inside of response.body
		// while also getting the post titles on the homepage to make sure that the
		// titles displayed on the homepage match the titles in the response.body

		// Hint: Since the posts are sorted by date on the homepage, we have included
		// a sortedPosts function which will sort the posts inside of response.body for you.
		// https://lodash.com/docs/4.17.15#forEach

		cy.request('GET', '/api/posts').then((response) => {
			const posts = sortedPosts(response.body);

			_.each(posts, (post, index) => {
				cy.get(`[data-test="post-link-${index}"]`).contains(post.title);
			});
		});
	});

	it('formats the post date correctly on the homepage', () => {
		// Use _.each() from lodash to iterate over the posts inside of response.body
		// while also getting the post dates on the homepage to make sure that the
		// dates displayed on the homepage are formatted correctly.
		// i.e 2020-01-02 from the API is formatted and displayed as January 2, 2020 on the homepage

		// Hint: We are included format and parseISO from the 'date-fns' library.
		// You will need to use both of these methods to format the dates coming
		// from the API into the correct format. If you get stuck, the formatting string,
		// can be found inside of /components/date.js

		cy.request('GET', '/api/posts').then((response) => {
			_.each(sortedPosts(response.body), (post, index) => {
				cy.get(`[data-test="post-date-${index}"]`).contains(format(parseISO(post.date), 'LLLL d, yyyy'));
			});
		});
	});
});