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

    // improper classNumber
    if (!classNumber.match(/^\d{3}$/)) {
        res.redirect('/');
        return;
    }

    dogedc(classNumber, function(ddc) {
        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName
        });
    });
};
