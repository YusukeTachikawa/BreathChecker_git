//
exports.result_b = function() 
{
	//result画面
	var win3 = Titanium.UI.createWindow
	({
		backgroundColor: '#0f0'	
	});
	
	//badイメージ
	var imageView = Titanium.UI.createImageView({
		image: 'badsmell.png',
		width: Titanium.UI.FILL,
		height: Titanium.UI.FILL
	});
	
	// //アラートのメッセージ
	// var a = Titanium.UI.createAlertDialog({
		// title:'Alert!!',
		// message:'Hello World'
	// });
	
	//アラート画面を開くボタンを作る
	var button = Titanium.UI.createButton
	({
		height: 40,
		width: 140,
		bottom: 90,
		title: '口臭予防しとく?'
	});
	
	button.addEventListener('click', function(){
			//アラートのメッセージ
		var a = Titanium.UI.createAlertDialog({
			title:'Alert!!',
			message:'Hello World'
		});
		a.message = '口臭予防する';
		a.buttonNames = ['OK','Cancel'];
		a.cancel = 1;
		a.show();
		a.addEventListener('click',function(e){
			//ダイアログをクリックしたらウィンドウを開く
			if(e.index == 0){
			var new_win = Ti.UI.createWindow({backgroundColor:'White'});
			//new_win.add(new_label);
			
			var webview = Ti.UI.createWebView({
				url:'http://titanium-mobile.jp/',
				width: Ti.UI.FILL,
				hight: Ti.UI.FILL
			});
			new_win.add(webview);
			new_win.open();
				
			}else{
				
			//タイトル画面に戻る
			var title = require('title').title;
			var win = new title();
			win.open();
				
			}
		});	
	});
	
	
	//win3に画像表示
	win3.add(imageView);
	//win3にボタン表示
	win3.add(button);
	
	return win3;
	
}