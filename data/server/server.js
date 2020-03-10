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



app.post('/card/daily', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = [
    {
        "name": "FFB Volume (MT)",
        "apiBar": "/ffb/daily_bar",
        "apiDetails": "/ffb/daily_details",
        "apiHistory": "/ffb/history",
        "header": "858.54",
        "footer": "0.00"
    },
    {
        "name": "OER (%)",
        "apiBar": "/oer/daily_bar",
        "apiDetails": "/oer/daily_details",
        "apiHistory": "/oer/history",
        "header": "19.17",
        "footer": "0.00"
    },
    {
        "name": "KER (%)",
        "apiBar": "/ker/daily_bar",
        "apiDetails": "/ker/daily_details",
        "apiHistory": "/ker/history",
        "header": "5.75",
        "footer": "0.00"
    },
    {
        "name": "TBS Price (Rp/Kg)",
        "apiBar": "/tbsp/daily_bar",
        "apiDetails": "/tbsp/daily_details",
        "apiHistory": "/tbsp/history",
        "header": "1,275.96",
        "footer": "1,279.14"
    },
    {
        "name": "Process Margin (Rp/Kg)",
        "apiBar": "/pm/daily_bar",
        "apiDetails": "/pm/daily_details",
        "apiHistory": "/pm/history",
        "header": "0.00",
        "footer": "0.00"
    },
    {
        "name": "Sortasi (%)",
        "apiBar": "/sortasi/daily_bar",
        "apiDetails": "/sortasi/daily_details",
        "apiHistory": "/sortasi/history",
        "header": "7.94",
        "footer": "8.07"
    },
    {
        "name": "Cangkang (%)",
        "apiBar": "/ckg/daily_bar",
        "apiDetails": "/ckg/daily_details",
        "apiHistory": "/ckg/history",
        "header": "0.00",
        "footer": "0.00"
    },
    {
        "name": "CPO Price (Rp/Kg)",
        "apiBar": "/cpo/daily_bar",
        "apiDetails": "/cpo/daily_details",
        "apiHistory": "/cpo/history",
        "header": "0.00",
        "footer": "0.00"
    },
    {
        "name": "PK Price (Rp/Kg)",
        "apiBar": "/pk/daily_bar",
        "apiDetails": "/pk/daily_details",
        "apiHistory": "/pk/history",
        "header": "0.00",
        "footer": "0.00"
    },
    {
        "name": "PM + Cangkang (Rp/Kg)",
        "apiBar": "/pmckg/daily_bar",
        "apiDetails": "/pmckg/daily_details",
        "apiHistory": "/pmckg/history",
        "header": "0.00",
        "footer": "0.00"
    }
]
   res.end(JSON.stringify(response));
})

app.post('/ffb/daily_details', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var response = [];
   res.end(JSON.stringify(response));
})

app.post('/ffb/daily_bar', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var response = {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40]
        }
      ]
    };
   res.end(JSON.stringify(response));
})

app.post('/ffb/history', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var response = [];
   res.end(JSON.stringify(response));
})




app.post('/card/weekly', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = [];
   res.end(JSON.stringify(response));
})

app.post('/card/mtd', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = []
   res.end(JSON.stringify(response));
})


app.post('/card/ytd', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = []
   res.end(JSON.stringify(response));
})

app.post('/card/detail', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {
    chart : {},
    table : {
      columns : [
        { title: 'Region', field: 'region', width : '130px' },
        { title: 'Mill', field: 'mill', width : '130px' },
        { title: 'Supplier Name', field: 'supplier', width : '180px' },
        { title: '1', field: 'd1', type: 'numeric' },
        { title: '2', field: 'd2', type: 'numeric'},
        { title: '3', field: 'd3', type: 'numeric' },
        { title: '4', field: 'd4',type: 'numeric' },
        { title: '5', field: 'd5', type: 'numeric'},
        { title: '6', field: 'd6', type: 'numeric' },
        { title: '7', field: 'd7', type: 'numeric' },
        { title: '8', field: 'd8', type: 'numeric'},
        { title: '9', field: 'd9', type: 'numeric' },
        { title: '10', field: 'd10',type: 'numeric' },
        { title: '11', field: 'd11', type: 'numeric'},
        { title: '12', field: 'd12', type: 'numeric' }
      ],
    data : [
        {
          id: 1,
          region: 'RO-123',
        },
        {
          id: 2,
          mill: "PAN",
          parentId: 1,
        },
        {
            id: 3,
            mill: "PGD",
            parentId: 1,
        },
        {
            id: 4,
            supplier: "supplier 120",
            parentId: 2,
            d1:12, d2:54, d3:20, d4:23, d5:45, d6:145452, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 6,
            supplier: "supplier 2",
            parentId: 2,
            d1:12, d2:54, d3:20, d4:23, d5:23, d6:34, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 7,
            supplier: "supplier a",
            parentId: 3,
            d1:34, d2:879, d3:23423, d4:3463, d5:345, d6:56, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 8,
            supplier: "supplier b",
            parentId: 3,
            d1:343, d2:343, d3:232, d4:23323, d5:232, d6:23, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 9,
            region: 'RO-2',
          },
        {
            id: 10,
            mill: "PAN XYZ",
            parentId: 9,
        },
        {
            id: 11,
            supplier: "supplier x",
            parentId: 10,
            d1:343, d2:343, d3:232, d4:23323, d5:232, d6:23, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
      ]
    },
    history : {}
   }
   res.end(JSON.stringify(response));
})


var server = app.listen(4000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
