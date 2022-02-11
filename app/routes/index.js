import Route from '@ember/routing/route'; // calling route class

import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
  // implement async method called model() --- aka model Hook

  @service store;

  // REPLACEMENT FOR DOING AN ASYNC and GETTING LINK
  async model() {
    return this.store.findAll('rental');
  }
}
