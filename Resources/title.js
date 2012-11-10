//exportsオブジェクト定義、外部参照可能
exports.title = function() 
{
	//title画面
	var win = Titanium.UI.createWindow
	({
		backgroundColor: '#E9D369'	
	});
	
	//画面を開くボタン
	var button = Titanium.UI.createButton
	({
		height: 84,
		width: 200,
		bottom: 100,
		title: '測定開始'
	});
	button.addEventListener('click', function(){
		//check画面
		//check画面の生成、開く//
		var check = require('check').check;
		var win1 = new check();
		win1.open();
	});
	//winにボタン表示
	win.add(button);
	
	return win;
	
}
