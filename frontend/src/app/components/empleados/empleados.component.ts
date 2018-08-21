import { Component, OnInit } from '@angular/core';
import { EmpleadoService}  from "../../services/empleado.service"
import { NgForm } from '@angular/forms';
import {Empleado} from '../../models/empleado';

declare var M: any;
@Component({
	selector: 'app-empleados',
	templateUrl: './empleados.component.html',
	styleUrls: ['./empleados.component.css']})
export class EmpleadosComponent implements OnInit {
	id_edit;
	constructor( private empleadoservice: EmpleadoService) { }

	ngOnInit() {
		this.obtenerempelados();
	}
	agregarempleado(form?:NgForm){
		if (this.id_edit != null && this.id_edit != ''){
			let datos= form.value;
			datos["_id"]= this.id_edit;
			console.log(datos);
			this.empleadoservice.putEmpleados(datos).subscribe(res=>{
				M.toast({html:'Se edito la informacion del empleado satisfactoriamente'});
				this.obtenerempelados();
				this.limpiarform(form);
				this.id_edit = '';
			},
			Error=>{
				console.log(Error);
			});

		}
		else{
			this.empleadoservice.postEmpleados(form.value).subscribe(res=>{
				this.limpiarform(form);
				M.toast({html:'Empleado creado satisfactoriamente'});
				this.obtenerempelados();
			},
			Error=>{
				console.log(Error);
			});
		}
	}
	limpiarform(form?:NgForm){
		if (form){
			form.reset();
			this.empleadoservice.selectedEmpleado = new Empleado();
		}
	}
	obtenerempelados(){
		this.empleadoservice.getEmpleados().subscribe(res=>{
			this.empleadoservice.empleados = res as  Empleado[];
			console.log(res);
		},
		Error=>{
			console.log(Error);
		});
	}
	editarempleado(empleado : Empleado){
		this.empleadoservice.selectedEmpleado = empleado;
		this.id_edit = empleado._id;
	}
	eliminarempleado(_id : string){
		if(confirm('¿Realmente desea eliminar este empleado?')){
			this.empleadoservice.deleteEmpleados(_id).subscribe(res=>{
				this.obtenerempelados();
				M.toast({html:'Empleado eliminado satisfactoriamente'});
			},
			Error=>{
				console.log(Error);
			});
		}}

}
