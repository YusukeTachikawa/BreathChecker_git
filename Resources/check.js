//
exports.check = function() 
{
	//check画面
	var win1 = Titanium.UI.createWindow
	({
		backgroundColor: '#745AC8'	
	});
	
	//画面を開くボタンを作る
	var button = Titanium.UI.createButton
	({
		height: 84,
		width: 180,
		bottom: 100,
		title: '測定結果を見る'
	});
	button.addEventListener('click', function(e){
		
		//
		var randomNumber = 1 + Math.floor(Math.random() * 3);
		//randomNumberのチェック
		//Ti.API.info(randomNumber);
		//
		 if(randomNumber == 1) {
		 	var result_a = require('result_a').result_a;
			var win2 = new result_a();
			win2.open();
		} else if(randomNumber == 2) {
			var result_b = require('result_b').result_b;
			var win3 = new result_b();
			win3.open();
		} else if(randomNumber == 3) {
			var result_c = require('result_c').result_c;
			var win4 = new result_c();
			win4.open();
		};
		
		/////////////label.text = randomNumber;
		
		
		//result画面
		//result画面の生成、開く//
		// var result_a = require('result_a').result_a;
		// var win2 = new result_a();
		// win2.open();
	});
	//win1にボタン表示
	win1.add(button);
	
	return win1;
	
}