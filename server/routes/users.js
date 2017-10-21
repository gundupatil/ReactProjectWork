import express from 'express';
import validateInput from '../shared/validations/signup'
 var fs = require('fs');
let router = express.Router();
   


router.post('/', (req, res) =>{

    //console.log(req.body);
    const {errors, isValid} = validateInput(req.body);

    if  (isValid){
        console.log('checking!');

        fs.writeFile("userdata.json", JSON.stringify(req.body, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
            res.json({success:true});
        });
    }
    if(!isValid){
        res.status(400).json(errors);
    }
});
export default router;

