const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );

/* Your code goes here */
const sportSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        //value: uuid.v4()
    }, // This is a String type holding a uuid
    name: {
        type: String,
        required: true
    },
    num_players: {
        type: Number,
        required: true
    }
});

const sportsCollection = mongoose.model('sports', sportSchema);

const Sports = {
    deleteSportById : function(sportId){
        return sportsCollection
            .remove({id:sportId})
            .then(removedSport => {
                return removedSport;
            })
            .catch(err => {
                return err;
            })
    }
}

module.exports = {
    Sports
};