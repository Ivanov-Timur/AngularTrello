trello.factory('cardFactory', function(){
	var service = {};
	var count = 1000;

	var cards =[
		{
			id: 1, 
			description: 'Fix bug',
			list_id: 1
		},
		{
			id: 2, 
			description: 'Fix bug',
			list_id: 1
		},
		{
			id: 3, 
			description: 'Fix bug',
			list_id: 2
		}
	];

	if (localStorage.cards === undefined){
		localStorage.setItem('cards', JSON.stringify(cards));
		localStorage.setItem('count1', JSON.stringify(count));
	} else {
		cards = JSON.parse(localStorage.cards);
		count = JSON.parse(localStorage.count1);

		// console.log(cards);
		for (var i = 0; i < cards.length; i++) {
			cards[i].$$hashKey = null;
		}
		
	}

	service.getCards = function (list) {


		return service.filter(list.id);
	};

	service.createCard = function (list, cardDescription) {
		cards.push({
			id: count++,
			description: cardDescription,
			list_id: list.id
		});

		localStorage.setItem('cards', JSON.stringify(cards));
		localStorage.setItem('count1', JSON.stringify(count));
	};

	service.deleteCard = function(card){
		service.delete(card.id);

		localStorage.setItem('cards', JSON.stringify(cards));
	};

	service.updateCard = function(newCard){
		var card = service.find(newCard.id);
		card.description = newCard.description;
		card.list_id = newCard.list_id;
	};

	service.delete = function(id){
		for (var i = 0; i < cards.length; i++) {
			if(cards[i].id === id){
				cards.splice(i, 1);
			}
		}
	};

	service.find = function(id){
		for (var i = 0; i < cards.length; i++) {
			if(cards[i].id === id){
				return cards[i];
			}
		}
	};

	service.filter = function(id) {
		var mas = [];

		for (var i = 0; i < cards.length; i++) {
			if(cards[i].list_id === id) {
				mas.push(cards[i]);
			}
		}

		return mas;
	};

	return service;
})