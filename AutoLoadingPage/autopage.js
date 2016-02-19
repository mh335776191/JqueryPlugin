
/// <reference path="../Jquery/jquery-1.8.0-vsdoc.js" />
; (function ($, window) {
	var defaults = {
		pagesize: 20,
		pageindex: 1,
		totalpage: 0,
		dataurl: '',
		params: { pagesize: this.pagesize, pageindex: this.pageindex }
	};
	$.fn.autopage = function (options) {
		var opts = $.extend(true, {}, defaults, options);
		var container = $(this);
		var curindex = opts.pageindex;//存取加载前的页码
		LoadData(opts, container);
		$(window).bind("scroll", function () {
			var ishorizon = IsInHorizon(container);//判断		
			if (curindex == opts.pageindex) {//防止未加载完当前页就加载下一页
				return;
			}
			else {
				curindex = opts.pageindex;
			}
			if (!ishorizon) {
				console.log("加载数据");
				LoadData(opts, container);
			}
		});
	};
	function LoadData(options, container) {
		var lodtip = $('<div>加载中</div>');
		container.after(lodtip);
		$.post(options.dataurl, options.params, function (data) {
			container.append(data);
			options.pageindex += 1;
			lodtip.remove();
		});
	}
	function IsInHorizon(container) {
		var fold = $(window).height() + $(window).scrollTop();
		if (fold >= container.offset().top)//超出视线范围
		{
			return false;
		}
		return true;
	}
}(jQuery, window));