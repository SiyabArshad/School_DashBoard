const express = require("express");
const router = express.Router();
const Student = require("../models/studentsModel");
const auth = require("../middleware/auth");

router.post("/create", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name,uniquenumer,clientID} = req.body;
      // Create user in our database
      const student = await Student.create({
        first_name,
        last_name,
        uniquenumer,
        clientID,
      });
      // return new user
      res.status(201).json(student);
    } catch (err) {
    }
    // Our register logic ends here
  });

// get all
router.get('/all', async (req, res) => {
    try {
      clientID = req.headers.clientid
      console.log(clientID)
    const student = await Student.find({"clientID":clientID});
    if(!student) throw Error('No Items');
    res.status(200).json(student);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
    });
// get one
router.get('/:id', async (req, res) => {
    try {
    const student = await Student.findById(req.params.id);
    if(!student) throw Error('No Student con ese nombre');
    res.status(200).json(student);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
    });

//edit one
router.patch('/:id', async (req, res) => {
    try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    if(!student) throw Error('Something went wrong while updating the student');
    res.status(200).json({success: true});
    }catch(err) {
    res.status(400).json({msg:err});
    }
    });

//delete one


module.exports = router;
