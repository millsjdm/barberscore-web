import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('organization-status'),
  level: DS.attr('organization-level'),
  kind: DS.attr('organization-kind'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  website: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  picture: DS.attr('string'),
  description: DS.attr('string'),
  short_name: DS.attr('string'),
  long_name: DS.attr('string'),
  parent: DS.belongsTo('organization', {inverse: 'children', async: true}),
  children: DS.hasMany('organization', {inverse: 'parent', async: true}),
  conventions: DS.hasMany('convention', {async: true}),
});
