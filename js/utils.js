(function() {
    var beforePrint = function() {
        fireListeners(printListener.beforePrint);
    };
    var afterPrint = function() {
        fireListeners(printListener.afterPrint);
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
    beforePrint = [],
    afterPrint = [],
}

function fireListeners(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i].fire();
    }
}