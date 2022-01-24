var csv = require('csv-parser')
const { createArrayCsvWriter } = require('csv-writer/dist')
var fs = require('fs')
const { Stream } = require('stream')
var canada = []
fs.unlink('canada.txt', function (err) {
    if (err && err.code == 'ENOENT') {
      console.info("File doesn't exist");
    } else if (err) {
      console.error('Error occurred');
    } else {
      console.info(`removed`);
    }
  });
  
  fs.unlink('usa.txt', function (err) {
    if (err && err.code == 'ENOENT') {
      console.info("File doesn't exist");
    } else if (err) {
      console.error('Error occurred');
    } else {
      console.info(`removed`);
    }
  });

var file =  fs.createReadStream('input_countries.csv')
.on('error',()=>{

})
.pipe(csv())
.on('data', (row) =>{
    if(row['country']=='United States'){
        canada.push(row)
        console.log(row)
    }
})
.on('end',()=>{
    console.log(canada)
})

// var buff = new Buffer.from(canada,'utf-8')
// console.log(canada);
// var canadatxt = fs.createWriteStream('usa.txt');
// canadatxt.write(buff)
// canadatxt.end();

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'canada.csv'
//   });

//   csvWriter.writeRecords(canada)
