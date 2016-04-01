import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  judgeSortProperties: ['kind', 'category','slot',],
  sortedJudges: Ember.computed.sort(
    'model.round.session.judges',
    'judgeSortProperties'
  ),
  actions: {
    saveSong(song, submission) {
      song.set('chart', submission.get('chart'));
      song.save();
    },
    buildPerformance() {
      this.model.build();
    },
    startPerformance() {
      this.model.start();
    },
    finishPerformance() {
      this.model.finish();
    },
  },
});
