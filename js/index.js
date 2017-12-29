$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
    $('.m6-btn li').each(function (index) {
        $(this).click(function () {
            $('.m6-btn li').removeClass('act').eq(index).addClass('act');
            $('.m6-show').hide().eq(index).show()
            $('.show-box').css('left',0)
        })
    })
	$('.right').click(function () {
	    if($('.show-box').css('left')!=0){
            var w=-2*$('.show-box li').outerWidth(true);
            $('.show-box').animate({'left':w},500);
        }
    })
    $('.left').click(function () {
        if($('.show-box').css('left')!='0'){
            $('.show-box').animate({'left':0},500)
        }
    })
    $('.m7-btn li').each(function (index) {
        $(this).click(function () {
            $('.m7-btn li').removeClass('act3').eq(index).addClass('act3');
            $('.m7-show').hide().eq(index).show()
        })
    })
})