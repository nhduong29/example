'use strict';

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/filter/region', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response =[
            { label: 'RO-1', value: 1},
            { label: 'RO-2', value: 2},
            { label: 'RO-3', value: 3},
            { label: 'RO-4', value: 4},
            { label: 'RO-5', value: 5},
            { label: 'RO-6', value: 6},
            { label: 'RO-7', value: 7},
            { label: 'RO-8', value: 8},
            { label: 'RO-9', value: 9},
            { label: 'RO-10', value: 10},
        ]
   res.end(JSON.stringify(response));
})
app.post('/filter/mill', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response =[
    {
        "value": "CCL",
        "label": "M10 - CCL"
    },
    {
        "value": "CSL",
        "label": "M13 - CSL"
    },
    {
        "value": "GCM",
        "label": "M14 - GCM"
    },
    {
        "value": "BSSP",
        "label": "M16 - BSSP"
    },
    {
        "value": "KPSS",
        "label": "M17 - KPSS"
    },
    {
        "value": "BSSI",
        "label": "M19 - BSSI"
    },
    {
        "value": "KPST",
        "label": "M20 - KPST"
    }
]
   res.end(JSON.stringify(response));
})
app.post('/filter/supplier', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response =[
    {
        "label": "GUNADY",
        "value": 156
    },
    {
        "label": "GUNAWAN",
        "value": 148
    },
    {
        "label": "H. YASRIL SARI",
        "value": 119
    },
    {
        "label": "INDRA PURNAWAN",
        "value": 151
    },
    {
        "label": "LEA GINTING",
        "value": 118
    },
    {
        "label": "MURNI",
        "value": 152
    },
    {
        "label": "PT. BINA MITRA MAKMUR",
        "value": 195
    },
    {
        "label": "PT.MITRA SAWIT JAMBI",
        "value": 194
    },
    {
        "label": "RAHMAD HIDAYAT BARUS",
        "value": 117
    }
]
   res.end(JSON.stringify(response));
})
app.post('/filter/docode', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response =[
    {
        "label": "BMM",
        "value": 1
    },
    {
        "label": "PT. ZODIAK S.S - RAM KUAMANG",
        "value": 2
    },
    {
        "label": "PT. ZODIAK S.S -RAM KUAMANG BMM",
        "value": 3
    },
    {
        "label": "PT.ZODIAK SMTR SJHTR-ARIES",
        "value": 4
    },
    {
        "label": "PT.ZODIAK SMTR SJHTR-SAGITARIUS",
        "value": 5
    },
    {
        "label": "PT.ZODIAK SMTR SJHTR-SCORPIO",
        "value": 6
    },
    {
        "label": "PT.ZODIAK SMTR SJHTR-SHAMEL",
        "value": 7
    },
    {
        "label": "PT.ZODIAK SMTR SJHTR-SK",
        "value": 8
    }
]
   res.end(JSON.stringify(response));
})



app.post('/allKPI', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = [
    {
        "name": "FFB Volume (MT)",
        "header": "126",
        "footer": "789"
    },
    {
        "name": "OER (%)",
        "header": "9655",
        "footer": "123"
    },
    {
        "name": "KER (%)",
        "header": "526",
        "footer": "123"
    },
    {
        "name": "TBS Price (Rp/Kg)",
        "header": "885",
        "footer": "452"
    },
    {
        "name": "Process Margin (Rp/Kg)",
        "header": "542",
        "footer": "425"
    },
    {
        "name": "Sortasi (%)",
        "header": "4536",
        "footer": "452"
    },
    {
        "name": "Cangkang (%)",
        "header": "45364",
        "footer": "254"
    },
    {
        "name": "CPO Price (Rp/Kg)",
        "header": "869",
        "footer": "85"
    },
    {
        "name": "PK Price (Rp/Kg)",
        "header": "526",
        "footer": "125"
    },
    {
        "name": "PM + Cangkang (Rp/Kg)",
        "header": "425",
        "footer": "256"
    }
]
   res.end(JSON.stringify(response));
})





var server = app.listen(4000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
