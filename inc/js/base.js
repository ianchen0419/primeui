// export var myButton = $('#my-button');
// export var myDesc = $('#my-desc');
module.exports = function $base() {
	//js測試
	console.log('111111');
	$('.dropdown').puidropdown();

	//jq測試
	$('#my-button').click(function(){
		$(this).fadeOut();
	})

	//function測試
	this.hi=function(){
		console.log('hihiihihihihihihi');
	}

	$('.dialog').puidialog({
		width: 900,
		modal: true,
		draggable: false,
		resizable: false,
		showEffect: 'fade',
	})


	this.showPopup=function(target){
		$(target).puidialog('show');
	}
}