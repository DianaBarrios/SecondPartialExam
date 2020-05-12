const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );

const { DATABASE_URL, PORT } = require( './config' );

const jsonParser = bodyParser.json();

const {Sports} = require('./models/sport-model')


const app = express();


/* Your code goes here */
app.delete('/sports/delete', jsonParser, (req, res) => {
    console.log("Deleting a sport");
    let idBody = req.body.id;
    if(!idBody){
        res.statusMessage = "You need to send the id";
        return res.status(406).end();
    }
    let idQuery = req.query.sportId;
    if(!idQuery){
        res.statusMessage = "You need to send the id";
        return res.status(406).end();
    }

    if(idBody != idQuery){
        res.statusMessage = "You need to send the correct id. They dont match";
        return res.status(409).end();
    }

    //
    Sports.
        deleteSportById(idBody)
        .then(result =>{
            if(result.deletedCount == 0){
                res.statusMessage = "This sport with this id doesnt exist";
                return res.status(404).end();
            }
            return res.status(204).end();
        })
        .catch(err => {
            return res.status(500).end();
        })

})

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( 'mongodb://localhost/sportsdb', settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});