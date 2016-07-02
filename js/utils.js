(function() {
    var beforePrint = function() {
        fireListeners(printListener.beforePrintListeners);
    };
    var afterPrint = function() {
        fireListeners(printListener.afterPrintListeners);
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

var printListener = {
    beforePrintListeners = [],
    afterPrintListeners = [],
	beforePrint=function(listener){
		beforePrintListeners.push(listener);
	},
	afterPrint=function(listener){
		afterPrintListeners.push(listener);
	},
	
	
}

function fireListeners(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i].fire();
    }
}