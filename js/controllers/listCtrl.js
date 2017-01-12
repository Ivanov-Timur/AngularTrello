trello.controller('listCtrl', function(listFactory, cardFactory){
	this.removeList = function(list){
		listFactory.removeList(list);
	};

	this.getCards = function(list) {
		return cardFactory.getCards(list);
	};

	this.createCard = function(list){
		if(this.cardDescription !== undefined && this.cardDescription !== ''){
			cardFactory.createCard(list, this.cardDescription);
			this.cardDescription = '';
		}
	};
});