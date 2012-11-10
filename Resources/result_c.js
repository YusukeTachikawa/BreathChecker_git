//
exports.result_c = function() 
{
	//result画面
	var win4 = Titanium.UI.createWindow
	({
		backgroundColor: '#000'	
	});
	
	//
	var imageView = Titanium.UI.createImageView({
		image: 'fripee.png',
		width: Titanium.UI.FILL,
		height: Titanium.UI.FILL
	});
	
	//画面を開くボタンを作る
	var button = Titanium.UI.createButton
	({
		height: 40,
		width: 140,
		bottom: 100,
		title: 'タイトルに戻る'
	});
	button.addEventListener('click', function(){
		
		
		
		//タイトル画面に戻る
		var title = require('title').title;
		var win = new title();
		win.open();
	});
	
	//
	win4.add(imageView);
	//win4にボタン表示
	win4.add(button);
	
	return win4;
	
}