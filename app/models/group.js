import Ember from 'ember';
import Model from 'ember-data/model';
import DS from 'ember-data';
// import { validator, buildValidations } from 'ember-cp-validations';
import {memberAction} from 'ember-api-actions';

// const Validations = buildValidations({
//   email: validator('format', {
//     type: 'email',
//     allowBlank: true
//   }),
//   website: validator('format', {
//     type: 'url',
//     allowBlank: true
//   }),
// });

export default Model.extend({
  nomen: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('group-status'),
  kind: DS.attr('group-kind'),
  shortName: DS.attr('string'),
  code: DS.attr('string'),
  startDate: DS.attr('isodate'),
  endDate: DS.attr('isodate'),
  location: DS.attr('string'),
  website: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
  bhsId: DS.attr('number'),
  orgSort: DS.attr('number'),
  organization: DS.belongsTo('organization', {async: true}),
  awards: DS.hasMany('award', {async: true}),
  conventions: DS.hasMany('convention', {async: true}),
  entries: DS.hasMany('entry', {async: true}),
  members: DS.hasMany('member', {async: true}),
  officers: DS.hasMany('officer', {async: true}),
  repertories: DS.hasMany('repertory', {async: true}),
  permissions: DS.attr(),

  activate: memberAction({path: 'activate', type: 'post'}),
  deactivate: memberAction({path: 'deactivate', type: 'post'}),

  isBHS: Ember.computed.notEmpty(
    'bhsId',
  ),

  isActive: Ember.computed.equal(
    'status',
    'Active',
  ),

  kindOptions: [
    'Quartet',
    'Chorus',
  ],

  kindSort: Ember.computed(
    'kind',
    'kindOptions',
    function() {
      return this.get('kindOptions').indexOf(this.get('kind'));
    }
  ),
  statusOptions: [
    'New',
    'Active',
    'Inactive',
  ],

  statusSort: Ember.computed(
    'status',
    'statusOptions',
    function() {
      return this.get('statusOptions').indexOf(this.get('status'));
    }
  ),
});
