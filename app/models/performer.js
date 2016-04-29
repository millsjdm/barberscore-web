import Ember from 'ember';
import DS from 'ember-data';
import {memberAction} from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('performer-status'),
  picture: DS.attr('string'),
  tenor: DS.belongsTo('role', {async: true}),
  lead: DS.belongsTo('role', {async: true}),
  baritone: DS.belongsTo('role', {async: true}),
  bass: DS.belongsTo('role', {async: true}),
  men: DS.attr('number'),
  risers: DS.attr('number'),
  is_evaluation: DS.attr('boolean'),
  director: DS.belongsTo('role', {async: true}),
  codirector: DS.belongsTo('role', {async: true}),
  representing: DS.belongsTo('organization', {async: true}),
  seed: DS.attr('number'),
  prelim: DS.attr('number'),
  mus_points: DS.attr('number'),
  prs_points: DS.attr('number'),
  sng_points: DS.attr('number'),
  total_points: DS.attr('number'),
  mus_score: DS.attr('number'),
  prs_score: DS.attr('number'),
  sng_score: DS.attr('number'),
  total_score: DS.attr('number'),
  group: DS.belongsTo('group', {async: true}),
  session: DS.belongsTo('session', {async: true}),
  performances: DS.hasMany('performance', {async: true}),
  contestants: DS.hasMany('contestant', {async: true}),
  submissions: DS.hasMany('submission', {async: true}),
  scratch: memberAction({path: 'scratch'}),
  soa: Ember.computed(function() {
    return this.get('session.rounds');
  }),
});
