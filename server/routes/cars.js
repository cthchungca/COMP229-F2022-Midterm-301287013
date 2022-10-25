// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the car model
let car = require("../models/cars");

/* GET cars List page. READ */
router.get("/", (req, res, next) => {
  // find all cars in the cars collection
  car.find((err, cars) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("cars/index", {
        title: "Cars",
        cars: cars,
      });
    }
  });
});

//  GET the Car Details page in order to add a new Car
router.get("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   res.render("cars/add", {
    title: "Add Car",
  });
});

// POST process the Car  Details page and create a new Car  - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  /*
    Step 1: Create a new object
    Step 2: Commit to DB: Create
  */
  let newcar= car({
    Carname: req.body.carname,
    Category: req.body.category,
    Carmodel: req.body.carmodel,
    Price: req.body.price
  });
  car.create(newcar, (err, committedCar) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log("Entry created.")
      res.redirect("/cars");
    }
  });

});

// GET the Car Details page in order to edit an existing Car
router.get("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  /*
    Step 1: Retrieve an Object by id: findOne(id)
  */
  targetId = req.params.id;
  car.findById(targetId, (err, requestObj) => {
    if(err)
      console.log(err)
    else
      res.render("cars/details", {
        title: "Edit" + requestObj.Carname,
        cars: requestObj
      });
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  /*
    Step 1: Create new Object with id
    Step 2: Commit to DB: updateOne
  */
  targetId = req.params.id;
  let updatedRecord = car({
    _id: targetId,
    Carname: req.body.Carname,
    Category: req.body.Category,
    Carmodel: req.body.Carmodel,
    Price: req.body.Price
  });

  car.updateOne({_id: targetId}, updatedRecord, (err) =>{
    if(err)
      console.log(err);
    else
      res.redirect("/cars");
  });
});

// GET - process the delete
router.get("/delete", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

module.exports = router;
