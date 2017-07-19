import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  store: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  openModal: false,
  modalError: false,
  publishConvention: task(function *() {
    try {
      let convention = yield this.model.publish({
        'by': this.get('currentUser.user.id')
      });
      this.store.pushPayload('convention', convention);
      this.set('openModal', false);
      this.set('modalError', false);
      this.get('flashMessages').success("Published!");
    } catch(e) {
      this.set('modalError', true);
    }
  }).drop(),
  openConvention: task(function *() {
    try {
      let convention = yield this.model.open({
        'by': this.get('currentUser.user.id')
      });
      this.store.pushPayload('convention', convention);
      this.get('flashMessages').success("Opened!");
    } catch(e) {
      this.get('flashMessages').danger("Please check that all fields are entered!");
    }
  }).drop(),
});
