var Empleado= require('../models/empleados');
var empleadorCtrl={};
empleadorCtrl.getEmpleados = async (req,res)=>{
	var empleados = await Empleado.find();
	res.json(empleados);
}
empleadorCtrl.createEmpleados = async (req,res)=>{
	var data_empleado ={
		name: req.body.name,
		office: req.body.office,
		position: req.body.position,
		salary: req.body.salary
	}
	var empleado = new Empleado(data_empleado);
	var createempleado =await empleado.save();
	console.log(empleado);
	res.json(createempleado);
}
empleadorCtrl.getEmpleado = async (req,res)=>{
	var empleado = await Empleado.findById(req.params.id);
	res.json(empleado);
	
}
empleadorCtrl.editEmpleado = async (req,res)=>{
	console.log(req.body);
	var data_empleado ={
		name: req.body.name,
		office: req.body.office,
		position: req.body.position,
		salary: req.body.salary
	}
	var empleado = await Empleado.findByIdAndUpdate(req.params.id,{$set: data_empleado},{new:true});
	res.json(empleado);
}
empleadorCtrl.deleteEmpleado = async (req,res)=>{
	 await Empleado.findByIdAndRemove(req.params.id);
	res.json({
		status:200,
		message:'Empleado eliminado'
	});
}



module.exports= empleadorCtrl;