const express = require('express')
const app = express()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const bodyParser = require('body-parser')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'comments-manager'

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded( {extended: true} ))

app.post('/api/insert', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        const lowerCaseEmail = req.body.email.toLowerCase()

        db.collection('comments').insertOne({
            email: lowerCaseEmail,
            comment: req.body.comment,
            rating:req.body.rating
        })
    })

    res.send({ message: 'comment was entered successfully from the user' })
})

app.post('/api/updateLastActive', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        const lowerCaseEmail = req.body.email.toLowerCase()

        db.listCollections({name: 'lastActive'}).next(function(err, collinfo) {
            if (collinfo) { // lastActive collection exsits

                db.collection('lastActive').find({}).toArray( (err, result) => {
                    if (err) {
                        return console.log('Did not found any contents')
                    }
                    
                    let flag = 0;

                    result.map((collection) => { // if the email is exists it will be updated

                        if (collection.email === lowerCaseEmail){

                            db.collection('lastActive').updateOne(
                                {email:lowerCaseEmail}, //query
                                // $update query
                                { $set : {
                                    date: req.body.date,
                                    time: req.body.time
                            }});

                            flag = 1;
                        }
                    })

                    if (flag == 0) { // if the email is not exists yet it will be insertded for the first time
                        
                        db.collection('lastActive').insertOne({
                            email: lowerCaseEmail,
                            date: req.body.date,
                            time:req.body.time
                        })
                    }
                })
            }
            else { // lastActive collection does not exsits

                db.collection('lastActive').insertOne({ // create the lastActive collection with the first content
                    email: lowerCaseEmail,
                    date: req.body.date,
                    time:req.body.time
                })
            }

            res.send({ message: 'Email account last active time was updated!' })
        });
    })
})

app.get('/api/comments', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        db.collection('comments').find({}).toArray( (err, result) => {
            if (err) {
                return console.log('Did not found any comments')
            }

            res.send(result)
        })
    })
})

app.get('/api/allLastActive', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        db.collection('lastActive').find({}).toArray( (err, result) => {
            if (err) {
                return console.log('Did not found any comments')
            }

            res.send(result)
        })
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);