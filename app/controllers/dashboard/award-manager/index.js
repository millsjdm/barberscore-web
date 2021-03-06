import Ember from 'ember';

export default Ember.Controller.extend({
    currentUser: Ember.inject.service('current-user'),
    sortProperties: [
        'statusSort',
        'organizationKindSort',
        'organizationNameSort',
        'seasonSort',
        'kindSort',
        'levelSort',
        'name',
    ],
    uniqueItems: Ember.computed.uniq(
        'model',
    ),
    sortedItems: Ember.computed.sort(
        'uniqueItems',
        'sortProperties'
    ),
    actions: {
        createAward() {
          this.transitionToRoute('dashboard.award-manager.new');
        },
        sortBy(sortProperties) {
          this.set('sortProperties', [sortProperties]);
        },
    },
});
