import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
		let url = payload.url.split('/');
		let characterId = url[url.length - 2];
		payload.id = characterId;

		return this._super(store, primaryModelClass, { person: payload }, id, requestType);
	}
});