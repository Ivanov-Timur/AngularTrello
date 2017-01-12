trello.factory('listFactory', function(){
	var service = {},
	count = 1000;

	var lists = [
		{
			id: 1,
			listName: 'Список 1'
		},
		{
			id: 2,
			listName: 'Список 2'
		}
	];

	

	service.getLists = function () {
		if (localStorage.lists === undefined){
			localStorage.setItem('lists', JSON.stringify(lists));
			localStorage.setItem('count', JSON.stringify(count));
		} else {
			lists = JSON.parse(localStorage.lists);
			count = JSON.parse(localStorage.count);

			for (var i = 0; i < lists.length; i++) {
				lists[i].$$hashKey = null;
			}
			
		}

		return lists;
	};

	service.addList = function(listName){
		lists.push({
			id: count++,
			listName: listName
		});

		localStorage.setItem('lists', JSON.stringify(lists));
		localStorage.setItem('count', JSON.stringify(count));
	};

	service.removeList = function(list){
		this.delete(list.id);

		localStorage.setItem('lists', JSON.stringify(lists));
	};	

	service.delete = function(id){
		for (var i = 0; i < lists.length; i++) {
			if(lists[i].id === id){
				lists.splice(i, 1);;
			}
		}
	}

	return service;
})