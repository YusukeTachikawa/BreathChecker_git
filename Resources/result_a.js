//
exports.result_a = function() 
{
	//result画面
	var win2 = Titanium.UI.createWindow
	({
		backgroundColor: '#F00'	
	});
	
	//画像表示
	var imageView = Titanium.UI.createImageView({
		image:'goodsmell.png',
		width: Titanium.UI.FILL,
		height: Titanium.UI.FILL
	});
	
	//画面を開くボタンを作る
	var button = Titanium.UI.createButton
	({
		height: 40,
		width: 140,
		bottom: 160,
		title: 'タイトルに戻る'
	});
	button.addEventListener('click', function(){
		//
		var title = require('title').title;
		var win = new title();
		win.open();
	});
	
	//
	win2.add(imageView);
	//win2にボタン表示
	win2.add(button);
	
	return win2;
	
}