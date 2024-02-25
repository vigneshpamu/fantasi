import express from 'express'
import {
  getUserVehicles,
  getVehicles,
} from '../controllers/vehicle.controller.js'

const router = express.Router()

router.get('/get', getVehicles)
router.post('/get-my-order', getUserVehicles)

export default router
