const express = require("express")

const { check } = require("express-validator")

const adminControllers = require("../controllers/admin-controllers")

const router = express.Router()

router.get("/view", adminControllers.getOrders)

// router.get("/:workoutID/edit", workoutControllers.getWorkout)

// router.patch("/:workoutID", check('workoutTitle').notEmpty(), workoutControllers.updateWorkout)

// router.delete("/:workoutID", workoutControllers.deleteWorkout)

module.exports = router