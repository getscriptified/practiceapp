import Controller from '@ember/controller';

export default Controller.extend({

	response  : undefined,
	editData  : undefined,

	actions: {
		createGame() {
			let title = this.get('title');

			let newGame = this.store.createRecord('game', { title })

			newGame.save();
		},

		editRecord( data ) {
			this.set( 'editData', data );

			new Promise( respond => {
				this.addObserver( 'response', function observer(){
          this.removeObserver( 'response', observer );
          respond( this.get( 'response' ) );
				});
			}).then(proceed => {
				const props = {
					editData: undefined,
					response: false
				}

				if (proceed) {
					let data = this.get('editData');
					this.store.findRecord('game', data.id).then( data => {
						data.save();
					})
				}

				this.setProperties(props);
			});
		},

		response( response ) {
			this.set('response', response);
		},

		deleteGame( data ) {
			data.deleteRecord();
			data.save();
		}
	}
});
