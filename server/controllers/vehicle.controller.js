import OrderModel from '../models/order.model.js'
import Vehicle from '../models/vehicle.model.js'

export const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getUserVehicles = async (req, res, next) => {
  try {
    console.log(req.body.id)
    const order = await OrderModel.find({ user: req.body.id })
    // console.log('Working')
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
