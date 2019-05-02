const dogedc = require('dogedc')

// for randomized color schemes
let random = () => {
    return Math.floor(Math.random() * 6 + 1)
}

exports.index = (req, res) => {
    dogedc(null, (err, ddc) => {
        if (err) {
            console.log(err)
            res.redirect('/')
            return
        }

        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName,
            random: random()
        })
    })
}

exports.number = (req, res) => {
    var classNumber = req.params.number

    // improper classNumber
    if (!classNumber.match(/^\d{3}$/)) {
        res.redirect('/')
        return
    }

    dogedc(classNumber, (err, ddc) => {
        if (err) {
            console.log(err)
            res.redirect('/' + classNumber)
            return
        }

        res.render('index', {
            classNumber: ddc.classNumber,
            className: ddc.dogeClassName,
            random: random()
        })
    })
}
