var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true})
    .then(() => { console.info('Connection OK!!!'); })
    .catch((err) => { 
        console.error('Connection Error', err);
        process.exit();
    });
