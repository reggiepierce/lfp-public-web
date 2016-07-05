(function() {
	var beforePrint = function() {
		for (i = 0; i < beforePrintCallbacks.length; i++) {
			beforePrintCallbacks[i]();
		}
	};
	var afterPrint = function() {
		for (i = 0; i < afterPrintCallbacks.length; i++) {
			afterPrintCallbacks[i]();
		}
	};

	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia('print');
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				beforePrint();
			} else {
				afterPrint();
			}
		});
	}
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
}());

var beforePrintCallbacks = [];
jQuery.beforePrintListener = function beforePrintListener(callback) {
	beforePrintCallbacks.push(callback);
}

var afterPrintCallbacks = [];
jQuery.afterPrintListener = function afterPrintListener(callback) {
	afterPrintCallbacks.push(callback);
}

jQuery.clickAndEnterEvent = function clickAndEnterEvent($jqueryEl, event) {
	$jqueryEl.click(function() {
		event();
	})
	$jqueryEl.keypress(function(e) {
		if (e.which == 13) {// Enter key pressed
			$jqueryEl.click();// Trigger search button click event
		}
	});
}
