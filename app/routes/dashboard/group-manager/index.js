import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),
  model: function() {
    return this.get('store').query('group', {
      'members__person__user': this.get('currentUser.user.id'),
      'status__gte': '0',
      'page_size': 100
    });
  },
});
