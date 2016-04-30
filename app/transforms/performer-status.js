import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    var map = {
      0: 'New',
      10: 'Qualified',
      20: 'Accepted',
      30: 'Declined',
      40: 'Dropped',
      45: 'Evaluation',
      50: 'Official',
      55: 'Disqualified',
      60: 'Finished',
      90: 'Final',
    };
    return map[serialized];
  },

  serialize: function(deserialized) {
    var map = {
      'New': 0,
      'Qualified': 10,
      'Accepted': 20,
      'Declined': 30,
      'Dropped': 40,
      'Evaluation': 45,
      'Official': 50,
      'Disqualified': 55,
      'Finished': 60,
      'Final': 90,
    };
    return map[deserialized];
  }
});
