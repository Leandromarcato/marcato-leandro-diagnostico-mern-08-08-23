const {Router}= require('express')
const router = Router()
const {getTareas,postTareas,putTareas,deleteTareas, completarTarea} = require('../controllers/tareas.controllers')

router.route('/')
.get(getTareas)
.post(postTareas)

router.route('/:id')
.put(putTareas)
.delete(deleteTareas)
.patch(completarTarea)
module.exports= router
