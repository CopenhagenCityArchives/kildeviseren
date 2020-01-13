//Display Google form, used for feed back
var formShower = (function () {
    var exports = {};
    exports.toggleFeedback = function(display) {
        var box = document.getElementById('feedbackbox');
        if(box){
            if (box.style.display == 'block' && !display) {
                box.style.display = 'none';
            } else {
                if(display){
                    box.style.display = 'block';
                    //document.getElementById('feedbackiframe').src = 'https://docs.google.com/forms/d/1ry9KEYjw1cpQVcvbVMoFCTLCfU3DQwyT_yGyCSF-LFo/viewform?embedded=true&bc=transparent';
                }
            }
        }
    };

    return exports;
}());
