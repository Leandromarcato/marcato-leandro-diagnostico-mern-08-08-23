const tareasControllers = {};
const tareas = require("../models/tareas.moduls");

tareasControllers.getTareas = async (req, res) => {
  const data = await tareas.find({isActive: true});
  res.json(data);
};

tareasControllers.postTareas = (req, res) => {
  const { Tarea, descripcion, autor, Estado } = req.body;
  const nuevaNota = new tareas({ Tarea, descripcion, autor, Estado });
  nuevaNota
    .save()
    .then((result) => {
      console.log(result);
      res.json({ message: "creado con exito" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error al crear la nota" });
    });
};

tareasControllers.putTareas = async (req, res) => {
  try {
  
    const tarea = await tareas.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    await tarea.updateOne({ Tarea, descripcion, autor, Estado });

    res.json({ message: "Tarea actualizada con éxito", tarea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};
tareasControllers.completarTarea = async (req, res) => {
  try {
    const tarea = await tareas.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    await tarea.updateOne({ Estado: "Completada" });

    res.json({ message: "Tarea actualizada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

tareasControllers.deleteTareas = async (req, res) => {
  try {
    const tarea = await tareas.findOne({
      $and:[{_id:req.params.id},
      {isActive:true}]
    });

    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    
    await tarea.updateOne({isActive:false});
    
  
    res.json({ message: "Tarea eliminada correctamente", tarea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};

module.exports = tareasControllers;
