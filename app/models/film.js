import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr('string'),
  people: DS.hasMany('person'),
  openingCrawl: DS.attr('string'),

  // dasherizedTitle: Ember.computed('title', function() {
  //   return this.get('title').dasherize();
  // }),

  // lengthOfOpeningCrawl: Ember.computed('openingCrawl', function() {
  //   return this.get('openingCrawl')
  //     .replace(/\r\n/g, ' ').split(' ')
  //     .reject((elem) => { return elem.length == 0; })
  //     .length;
  // }),

  // crawlData: Ember.computed('title', 'lengthOfOpeningCrawl', function() {
  //   return {
  //     value: this.get('lengthOfOpeningCrawl'),
  //     label: this.get('title'),
  //   };
  // })
});