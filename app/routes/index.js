import Route from '@ember/routing/route'; // calling route class

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  // implement async method called model() --- aka model Hook

  async model() {
    let response = await fetch('/api/rentals.json');
    // let parsed = await response.json();
    // console.log(parsed);
    // return parsed;

    let { data } = await response.json();

    return data.map((model) => {
      let { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { type, ...attributes };
    });
  }
}
