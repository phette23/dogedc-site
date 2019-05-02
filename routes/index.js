var dogedc = require('dogedc');

// for randomized color schemes
let random = () => {
    return Math.floor(Math.random() * 6 + 1)
}

exports.index = function(req, res){
    dogedc(null, function(err, ddc) {
        if (err) {
            console.log(err);
            res.redirect('/');
            return;
        }

        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName,
            random: random()
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

    dogedc(classNumber, function(err, ddc) {
        if (err) {
            console.log(err);
            res.redirect('/' + classNumber);
            return;
        }

        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName,
            random: random()
        });
    });
};
