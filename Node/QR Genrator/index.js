// Use inquirer npm to get user input .

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([{
    message : "Type in your URl:",
    name : "URL"
}])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => { 
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// Use the qr-image npm to convert user entere durl to qr code.



// Creat a text file to save the user input using the native fs node module.

