import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  part: DS.attr('director-part'),
  performer: DS.belongsTo('performer', {async: true}),
  person: DS.belongsTo('person', {async: true}),
});
