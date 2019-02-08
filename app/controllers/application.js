import Controller from '@ember/controller';

export default Controller.extend({

	actions: {
		createGame() {
			let title = this.get('title');

			let newGame = this.store.createRecord('game', { title })

			newGame.save();
		}
	}
});
