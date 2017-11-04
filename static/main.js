;(function () {
	'use strict';
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {
		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function(){
				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						el.addClass(effect + ' animated-fast');

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
			}, 100);
		}
	} , { offset: '85%' } );

	//hswx.js-nav
    function hoverARC(id,addClass,removeClass){//使用Hover来添加或移除Class
        $(id).hover(function(){
            $(this).addClass(addClass);
        },function(){
            $(this).removeClass(removeClass);
        });
    }

	hoverARC("#global-nav li","onfocus","onfocus");

	$("#global-nav ul li").hover(function(){
		$(this).children("ul").show();
	},function(){
		$(this).children("ul").hide();
	});

	var href= document.getElementsByTagName('a');
	for(let i=0; i<href.length; i++){
		href[i].ontouchend=function(){
			window.location.href=this.getAttribute("href");
		}

	}

}());

