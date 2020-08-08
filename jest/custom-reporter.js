let fs = require('fs');

// custom-reporter.js
class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.outputFiles = {
      business: "./output_revised.txt",
      boundary: "./output_boundary_revised.txt",
      exception: "./output_exception_revised.txt",
      xml: "./yaksha-test-cases.xml"
  };


  // fs.unlink(this.outputFiles.business, (err) => { if (err) console.log(`${outputFiles.business} not deleted`); });
  //       fs.unlink(this.outputFiles.boundary, (err) => { if (err) console.log(`${outputFiles.boundary} not deleted`); });
  //       fs.unlink(this.outputFiles.exception, (err) => { if (err) console.log(`${outputFiles.exception} not deleted`); });
  //       fs.unlink(this.outputFiles.xml, (err) => { if (err) console.log(`${outputFiles.xml} not deleted`); });
  }

  onRunComplete(contexts, results) {
    // console.log('Custom reporter output:');
    // console.log('GlobalConfig: ', this._globalConfig);
    // console.log('Options: ', this._options);
  }


  onRunStart(){
  }
  onTestResult(){
    let results = arguments[1];
    console.log("resultttttttttttttttttttttttt")
    console.log(results.testResults)
    console.log("resultttttttttttttttttttttttt")

    
    results.testResults.forEach(result=>{
      writeTextFiles(result,this.outputFiles,function (file, data) {
        fs.appendFileSync(file, data);
      });
    })


   


  }


}



const  writeTextFiles= function(result, outputFiles, cb){
        
  let testName = result.fullName.trim(); 
  let fileName = testName.split(" ")[1]; 

  // let testNameToCamelCase = testName.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/^\w/, c => c.toLowerCase());
  let testNameToCamelCase = camelCase(testName);

  let fileOutput = `${testNameToCamelCase}=${result.status==='passed'}`;
  // console.log(fileOutput);


  if(!!outputFiles[fileName])
  cb(outputFiles[fileName], `${fileOutput}\n`);
  // fs.appendFileSync(outputFiles[fileName], `${fileOutput}\n`);
}

const capitalize = function(str){
  return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
}

const camelCase = function(str){
  var words = str.split(" ").map(word=>{
      return capitalize(word);
  });
  
  return words.join('').charAt(0).toLowerCase()+words.join('').substring(1);
}

module.exports = MyCustomReporter;
// or export default MyCustomReporter;