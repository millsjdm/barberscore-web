import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  nomen: attr('string'),
  status: attr('role-status'),
  part: attr('role-part'),
  person: belongsTo('person', {async: true}),
  group: belongsTo('group', {async: true}),
  start_date: attr('isodate'),
  finish_date: attr('isodate'),
  permissions: attr(),

  statusOptions: [
    'New',
    'Active',
    'Inactive',
  ],

  partOptions: [
    'Tenor',
    'Lead',
    'Baritone',
    'Bass',
    'Director',
  ],

});
