const express = require("express");
const router = express.Router();
const payments = require("../models/paymentsModel");
const auth = require("../middleware/auth");

router.post("/create", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { student, reference,payment_mode,amount,discount,interes} = req.body;
      // Create user in our database
      const payment = await payments.create({
        student,
        reference,
        payment_mode,
        amount,
        discount,
        interes,
      });
      // return new user
      res.status(201).json(payment);
    } catch (err) {
        res.status(400).json({mesg: err})
    }

    // Our register logic ends here
  });

// get all
router.get('/all', async (req, res) => {
    try {
    const payment = await payments.find();
    if(!payment) throw Error('No Items');
    res.status(200).json(payment);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
    });
// get one
router.get('/:id', async (req, res) => {
    try {
    const payment = await payments.findById(req.params.id);
    if(!payment) throw Error('No payment con ese nombre');
    res.status(200).json(payment);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
    });

//edit one
router.patch('/:id', async (req, res) => {
    try {
    const payment = await payments.findByIdAndUpdate(req.params.id, req.body);
    if(!payment) throw Error('Something went wrong while updating the student');
    res.status(200).json({success: true});
    }catch(err) {
    res.status(400).json({msg:err});
    }
    });

//delete one


module.exports = router;
