import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://swapi.co',
  namespace: 'api',
  headers: {
    'Accept': 'application/json'
  },

  handleResponse(status, headers, payload, requestData) {
    let mungedPayload = payload.results.sortBy('episode_id');

    mungedPayload.forEach((payloadObj) => {
      let url = payloadObj.url.split('/');
      let filmId = url[url.length - 2];
      payloadObj.id = filmId;
    });
    
    return this._super(status, headers, { films: mungedPayload }, requestData);
  },
});