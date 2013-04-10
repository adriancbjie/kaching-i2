var app = angular.module('kaching', []).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html',   controller: RouteCtrl}).
	when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: RouteCtrl}).
	when('/gallery.html', {templateUrl: 'partials/gallery.html',   controller: RouteCtrl}).
	when('/scan_receipt.html', {templateUrl: 'partials/scan_receipt.html',   controller: RouteCtrl}).
	when('/scan_item.html', {templateUrl: 'partials/scan_item.html',   controller: RouteCtrl}).
	when('/purchase_summary.html', {templateUrl: 'partials/purchase_summary.html',   controller: RouteCtrl}).
	otherwise({redirectTo: '/'});
}]);

app.run(function ($rootScope) {
	$rootScope.user =
	{
		'name': 'test user',
		'monthly_budget': 200.00,
		'total_budget':500.00
	};

	$rootScope.asd=[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];

	$rootScope.photo_lib = 
	[{
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S1.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S3.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S4.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S5.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G5.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G4.png'
	}, {
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G3.png'
	}];
	
	$rootScope.all_receipts =
	[{
		'name': 'Deptford Clothing',
		'date': [22,"March",2013],
		'location': '1750 Deptford Center Rd',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R1.png',
		'items': [{
			'name': 'tnk - corset sld prnt',
			'quantity': '1',
			'price': 4.99
		}, {
			'name': 'Glitter Ballet Flat Blue',
			'quantity': '1',
			'price': 19.50
		}, {
			'name': 'swtr - spc dye poncho',
			'quantity': '1',
			'price': 14.99
		}, {
			'name': 'Emma vneck crop ls',
			'quantity': '1',
			'price': 9.99
		}],
		'item_images': [],
		'gst': 0.00,
		'scharge': 0,
		'total': 49.47
	}];

	$rootScope.receipts =
	[{
		'name': 'North Charleston',
		'date': [5,"March",2013],
		'location': '5461 Rivers Avenue',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R2.png',
		'items': [{
			'name': 'LBS Textiles',
			'quantity': '1',
			'price': 19.28
		}],
		'item_images': [{
			'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S1.png'
		}],
		'gst': 0.00,
		'scharge': 0,
		'total': 19.28
	},{
		'name': 'A15 Clothing',
		'date': [23,"February",2013],
		'location': '2050 Deptford Center Rd',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
		'items': [{
			'name': 'Trousers',
			'quantity': '1',
			'price': 18.00
		}, {
			'name': 'Suit Jacket',
			'quantity': '1',
			'price': 45.90
		}, {
			'name': 'Shirt',
			'quantity': '1',
			'price': 31.90
		}],
		'item_images': [{
			'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
		}],
		'gst': 8.71,
		'scharge': 0,
		'total': 95.80
	},{
		'name': 'Zara',
		'date': [13,"February",2013],
		'location': '156 Sommerset',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
		'items': [{
			'name': 'T-Shirt',
			'quantity': '1',
			'price': 18.00
		}, {
			'name': 'Long Pants',
			'quantity': '1',
			'price': 31.90
		}],
		'item_images': [{
			'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
		}],
		'gst': 8.71,
		'scharge': 0,
		'total': 58.61
	},{
		'name': 'Hello Clothing',
		'date': [9,"January",2013],
		'location': '2050 Deptford Center Rd',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
		'items': [{
			'name': 'Trousers',
			'quantity': '1',
			'price': 20.00
		}, {
			'name': 'Shirt',
			'quantity': '1',
			'price': 20.00
		}],
		'item_images': [{
			'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
		}],
		'gst': 8.71,
		'scharge': 0,
		'total': 48.71
	},{
		'name': 'H & M',
		'date': [19,"January",2013],
		'location': '123 Orchard Road',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
		'items': [{
			'name': 'Trousers',
			'quantity': '1',
			'price': 20.00
		}, {
			'name': 'Suit Jacket',
			'quantity': '1',
			'price': 35.90
		}, {
			'name': 'Shirt',
			'quantity': '1',
			'price': 11.10
		}],
		'item_images': [{
			'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
		}],
		'gst': 8.71,
		'scharge': 0,
		'total': 67.00
	}];

	$rootScope.chosen_receipt = null;

	// $rootScope.decipher = function() {
	// 	$('#decipher').show();
	// 	$(location).delay(3000).attr('href',"#/purchase_summary.html");

	// 	$rootScope.chosen_receipt = $rootScope.all_receipts[0];
	// };

	$rootScope.saveReceipt = function(r) {
		var hasReceipt = false;
		for (var i in $rootScope.receipts) {
			var re = $rootScope.receipts[i];
			if (r.name == re.name){
				$rootScope.receipts[i] = r;
				hasReceipt = true;
			}
		}

		if (!hasReceipt){
			$rootScope.receipts.unshift(r);
		}

		// for (var i=0;i<$rootScope.all_receipts.length;i++) {
		// 	item = all_receipts[i];
		// 	if (r.name == item.name){
		// 		$rootScope.all_receipts.remove(i);
		// 	}
		// }

		// console.log($rootScope.all_receipts);
	};

	$rootScope.getTotalSpentInAll = function() {
		var m = 2;
		
		var sum = 0;
		$.each($rootScope.receipts,function(index) {
			var item = $rootScope.receipts[index];
			if(month[m] === item.date[1]){
				sum += item.total;
			}
		});
		$rootScope.total_spent = Math.round(sum*100)/100;
		return $rootScope.total_spent;
	};

	$rootScope.getTotalSpentInMonth = function() {
		var m = $("#scroller").mobiscroll('getValue');
		
		var sum = 0;
		$.each($rootScope.receipts,function(index) {
			var item = $rootScope.receipts[index];
			if(month[m] === item.date[1]){
				sum += item.total;
			}
		});
		$rootScope.total_spent = Math.round(sum*100)/100;
		return $rootScope.total_spent;
	};

	$rootScope.add_photo = function(url) {
		var entry = {'url' : url}
		if ($rootScope.chosen_receipt.item_images.length <= 3){
			$rootScope.chosen_receipt.item_images.unshift(entry);
		}

		if ($rootScope.chosen_receipt.item_images.length >= 3){
			$("#libButton").addClass("disabled");
			$("#libButton").removeAttr("href");
			$("#scanButton").addClass("disabled");
			$("#scanButton").removeAttr("href");
		}
		$(".close").click()

	};


	$rootScope.random_receipt = function() {
		var randomNum = Math.floor(Math.random()*$rootScope.all_receipts.length);
		$rootScope.chosen_receipt = $rootScope.all_receipts[randomNum];
	};

	$rootScope.setReceipt = function(r) {
		console.log("Function");
		console.log(r);
		$rootScope.chosen_receipt = r;
	};

	$rootScope.random_item_photo = function() {
		var randomNum = Math.floor(Math.random()*$rootScope.photo_lib.length);
		$rootScope.chosen_item_photo = $rootScope.photo_lib[randomNum];
	};

	var month = {0:"January",1:"February",2:"March",3:"April"};

	$rootScope.getMonthSpendPlot = function(m) {
		//cumulative
		var arr = [];
		var sum = 0;
		arr.push(0);

		for(var i = 1 ; i<=31 ; i++) {
			var added = false;
			$.each($rootScope.receipts,function(index) {
				var item = $rootScope.receipts[index];

				if(month[m] === item.date[1] && item.date[0] == i){
					added = true;
					sum += item.total;
					arr.push(sum);
					// var item = $rootScope.receipts[index];
					// arr.push(parseFloat($rootScope.user.monthly_budget));
				}
				
			});
			if (!added){
				arr.push(sum);
			}
		}
		console.log("ASD");
		console.log(arr);
		return arr;
	};

	$rootScope.getMonthBudgetPlot = function(m) {
		var arr = [];
		arr.push(parseFloat($rootScope.user.monthly_budget));
		// $.each($rootScope.receipts,function(index) {
		for(var i = 1 ; i<=31 ; i++) {
			// var r = $rootScope.receipts[index];
			// if(month[m] === r.date[1]){
				// var item = $rootScope.receipts[index];
				arr.push(parseFloat($rootScope.user.monthly_budget));
			// }
		// });
		}
		console.log("dsa");
		console.log(arr);
		return arr;
	};

	$rootScope.getDaysOfMonth = function(){
		var arr = [];
		for (var i = 1; i<=31 ; i++){
			arr.push(parseInt(i));

		}
		return arr;
	}

	$rootScope.getRemainMonthly = function(m) {
		return Math.round((user.monthly_budget - getTotalSpent()) * 100) / 100;
	};

	$rootScope.getFormattedDate = function(d){
		return d[0] + " " + d[1] + " " + d[2];
	}

	// $rootScope.getMonthExpenditure(){
	// 	var arr = [];
	// 	// for(int i)

	// };
});