const express = require('express')
const app = express()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const bodyParser = require('body-parser')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'comments-manager'

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded( {extended: true} ))

app.post('/insert', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        db.collection('comments').insertOne({
            email: req.body.email,
            comment: req.body.comment,
            rating:req.body.rating
        })
    })

    res.send({ message: 'comment was entered successfully from the user' })
})

app.get('/comments', (req,res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
        if (error){
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        db.collection('comments').find({}).toArray( (err, result) => {
            if (err) {
                console.log('Did not found any comments')
            }

            res.send(result)
        })
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);