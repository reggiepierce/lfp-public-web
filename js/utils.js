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

(function() {
	beforePrint = function(callback) {
		beforePrintCallbacks.push(callback);
	};
}());

var afterPrintCallbacks = [];

(function() {
	afterPrint = function(callback) {
		afterPrintCallbacks.push(callback);
	};
}());
