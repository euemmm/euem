const express = require('express')
const fileUpload = require('express-fileupload')

const {spawn} = require('child_process')

const path = require('path')

const api = express.Router();

api.use(fileUpload());

api.get('/users', function (req, res) {
    res.json([
        { name: "Euem" },
        { name: "Bin" },
        { name: "😕" },
		{ name: "Super" }
    ]);

});

api.post('/ai/mnist/jpg', (req, res) => {

	const { image } = req.files

	if(!image) return res.json({Error : "image Error"})
	
	image.mv(__dirname + '/AI/input.jpg')

	const python = spawn('python3', [__dirname + '/AI/MNIST.py'])

	python.stdout.on('data', (data) => {

		console.log(`stdout : ${data}`)

	})

	python.stderr.on('data', (data) => {

		console.log(`stderr : ${data}`)
		
		res.json({Error: "Something Went Wrong Euem.."})

	})

	python.on('close', (code) => {

		console.log(`exit with code ${code}`)

		res.sendFile(path.resolve(__dirname + '/AI/output.json'))

	})

});

api.use('/', function (req, res, next) {

    res.json([
        { Error: "404" },
        { Resource: "Not Found" }
    ])

})

module.exports = api
