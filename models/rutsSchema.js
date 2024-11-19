const mongoose = require('mongoose');

const RutsSchema = new mongoose.Schema(
{
    check: { 
        type: Number,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('Ruts', RutsSchema);
