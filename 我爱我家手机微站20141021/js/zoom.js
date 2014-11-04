//�ƶ���640�������
;(function() {
	var $html = $('html'),
		$body = $('body');
	$(window).on('resize', function() {
		var ratio = $(this).width() / 640;
		ratio = ratio < 1 ? ratio : 1;
		$body.css({
			'zoom': ratio
		});
		$html.css({
			'font-size': ratio * 16
		});
	}).trigger('resize');
}());