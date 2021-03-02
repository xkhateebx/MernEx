const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please add name"] },
    image_url: { type: String, required: [true, "Please add photo"] },
    num_of_treasures: { type: Number, required: [true, "Please write the number of treasure chests"] },
    catch_phrase: { type: String, required: [true, "Please fill the catch phrase"] },
    crew_position: { type: String, required: [true, "Please select the position"] },
    peg_leg: {type: Boolean},
    eye_patch: {type: Boolean},
    hook_hand: {type: Boolean},    
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
//