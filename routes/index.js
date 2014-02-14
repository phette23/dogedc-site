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
    var classNumber = parseInt(req.params.number);

    dogedc(classNumber, function(ddc) {
        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName
        });
    });
};
