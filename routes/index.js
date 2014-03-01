var dogedc = require('dogedc');

exports.index = function(req, res){
    dogedc(null, function(ddc) {
        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName
        });
    });
};

exports.number = function(req, res){
    var classNumber = req.params.number;

    // normalize improper class numbers
    if (classNumber.length > 3) {
        classNumber = classNumber.substr(0, 3);
    } else if (classNumber.length === 2) {
        classNumber = '0' + classNumber;
    } else if (classNumber.length === 1) {
        classNumber = '00' + classNumber;
    }

    dogedc(classNumber, function(ddc) {
        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName
        });
    });
};
