(function(){
    "use strict";

    var startTime = Date.now();
    task("default",function(){
        var elapsedSeconds = (Date.now() - startTime)/1000;
        console.log("\n\n Build ok ("+ elapsedSeconds.toFixed(2) + "s)");
    });

}());
