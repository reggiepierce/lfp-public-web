(function() {
    var beforePrint = function() {
        fireListeners(beforePrintListeners);
    };
    var afterPrint = function() {
        fireListeners(afterPrintListeners);
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
var beforePrintListeners=[];
beforePrint = function(callback){
		beforePrintListeners.push(listener);
	 }	
}

var afterPrintListeners=[];
afterPrint = function(callback){
	afterPrintListeners.push(listener);
}	
}

function fireListeners(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i].fire();
    }
}