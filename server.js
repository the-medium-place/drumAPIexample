var express = require("express");

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const drumset = [
    {
        drumName: 'snare',
        brand: 'ludwig',
        size: '14 inch',
        buildYear: '1947'
    }, {
        drumName: 'small tom',
        brand: 'yamaha',
        size: '10 inch',
        buildYear: '1995'
    }, {
        drumName: 'medium tom',
        brand: 'yamaha',
        size: '12 inch',
        buildYear: '1995'
    }, {
        drumName: 'floor tom',
        brand: 'yamaha',
        size: '16 inch',
        buildYear: '1995'
    }

]

const cymbals = [
    {
        cymName: 'hi-hat',
        brand: 'zildjian',
        model: 'K/Z combos',
        size: '13 inches'
    }
]



app.get("/", function(req,res){
    res.send('drum api is working!')
})

app.get('/api/drums', function(req,res){
    return res.json(drumset);
})

app.get('/api/cymbals', function(req, res){
    return res.json(cymbals);
})

app.post('/api/drums', function(req, res){
    const newDrum = {
        drumName: req.body.drumName,
        brand: req.body.brand,
        size: req.body.size,
        buildYear: req.body.buildYear
    }
    drumset.push(newDrum);

    res.json("drumset is a little bigger now")
})


app.post('/api/cymbals', function(req, res){
    const newCymbal = {
        cymName: req.body.drumName,
        brand: req.body.brand,
        model: req.body.model,
        size: req.body.size
    }
    cymbals.push(newCymbal);

    res.json("cymbal collection is a little bigger now")
})





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  