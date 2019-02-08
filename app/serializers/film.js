import DS from 'ember-data';
// import shuffle from 'npm:shuffle-array';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    payload.films.forEach((film => {
      film.people = this.extractedCharacterIds(film);
      film.openingCrawl = film.opening_crawl;
      delete film.opening_crawl;
    }));

    return this._super(...arguments);
  },

  extractedCharacterIds(film) {
    let characterIds = film.characters.map((characterUrl) => {
      let splitUrl = characterUrl.split('/');
      return splitUrl[splitUrl.length - 2];
    });

    // take three random ids to cut down on api calls
    return characterIds
  }
});