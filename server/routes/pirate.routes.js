const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
    app.get('/api/pirate/:id', PirateController.getPirate);
}


//