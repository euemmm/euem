require('dotenv').config()

const express = require('express')

const subdomain = require('express-subdomain');

const app = express()

//const connection = require('./db/connect')

const api_routers = require('./routers/api_routers')

const cal_routers = require('./routers/cal_routers')

//const rtc_routers = require('./routers/rtc_routers')

app.use(subdomain('api', api_routers))

app.use(subdomain('react-native', cal_routers)) //app.use(subdomain('react-native', cal_routers))

app.use(express.static('public', {

	setHeaders: function(res) {

		res.set("Access-Control-Allow-Origin", "*")

	}

}))

app.get('/', function (req, res) {

    res.send('Hello World');

});

app.get('/fonts/D2', function(req, res) {

    res.sendFile(__dirname + '/public/fonts/D2Coding-Ver1.3.2-20180524-all.ttc')
	
})

app.get('/fonts/D2Coding-Ver1.3.2-20180524-all.woff2', function(req, res) {

    res.send(__dirname + '/public/fonts/D2Coding-Ver1.3.2-20180524-all.woff2')

})

app.get('/fonts/kaushan-script-regular-webfont.woff', function(req, res) {

    res.send(__dirname + '/public/fonts/kaushan-script-regular-webfont.woff')

})

app.get('/fonts/Campton-LightDEMO.woff2', function(req, res) {

	res.send(__dirname + '/public/fonts/Campton-LightDEMO.woff2')

})

app.get('/fonts/Campton-BoldDEMO.woff2', function(req, res) {

	res.send(__dirname + '/public/fonts/Campton-BoldDEMO.woff2')

})

const start = async () => {

    try {

        //await connection.connect()

        app.listen(process.env.PORT, () => {

            console.log("Server Listening ...")

        })

    } catch (error) {

        console.log(error)

    }

}

start()

// const handler = require('./public/build/handler.js');
 
// const app = express();
 
// // add a route that lives separately from the SvelteKit app
// app.get('/healthcheck', (req, res) => {
//   res.end('ok');
// });
 
// // let SvelteKit handle everything else, including serving prerendered pages and static assets
// app.use(handler);
 
// app.listen(process.env.PORT, () => {

//     console.log('listening....');

// });
