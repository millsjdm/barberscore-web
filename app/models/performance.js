import Ember from 'ember';
import DS from 'ember-data';
import {memberAction} from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('performance-status'),
  slot: DS.attr('number'),
  rank: DS.attr('number'),
  scheduled: DS.attr(),
  actual: DS.attr(),
  get_preceding: DS.attr('string'),
  get_next: DS.attr('string'),
  mus_points: DS.attr('number'),
  prs_points: DS.attr('number'),
  sng_points: DS.attr('number'),
  total_points: DS.attr('number'),
  mus_score: DS.attr('number'),
  prs_score: DS.attr('number'),
  sng_score: DS.attr('number'),
  total_score: DS.attr('number'),
  round: DS.belongsTo('round', {async: true}),
  performer: DS.belongsTo('performer', {async: true}),
  songs: DS.hasMany('song', {async: true}),
  move_top: memberAction({path: 'move_top'}),
  move_bottom: memberAction({path: 'move_bottom'}),
  scratch: memberAction({path: 'scratch'}),
  dixon: memberAction({path: 'dixon'}),
  points: Ember.computed.mapBy('songs', 'pointsSum'),
  pointsSum: Ember.computed.sum('points'),
  musScoresPoints: Ember.computed.mapBy('songs', 'musPointsSum'),
  musPointsSum: Ember.computed.sum('musScoresPoints'),
  // musPointsMean: Ember.computed('musPointsSum', 'musScores', function() {
  //   return (this.get('musPointsSum') / this.get('musScoresPoints').length).toFixed(1);
  // }),
  prsScoresPoints: Ember.computed.mapBy('songs', 'prsPointsSum'),
  prsPointsSum: Ember.computed.sum('prsScoresPoints'),
  // prsPointsMean: Ember.computed('prsPointsSum', 'prsScores', function() {
  //   return (this.get('prsPointsSum') / this.get('prsScoresPoints').length).toFixed(1);
  // }),
  sngScoresPoints: Ember.computed.mapBy('songs', 'sngPointsSum'),
  sngPointsSum: Ember.computed.sum('sngScoresPoints'),
  // sngPointsMean: Ember.computed('sngPointsSum', 'sngScores', function() {
  //   return (this.get('sngPointsSum') / this.get('sngScoresPoints').length).toFixed(1);
  // }),
});
