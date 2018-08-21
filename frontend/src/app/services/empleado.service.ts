import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Empleado} from '../models/empleado';
import { EmpleadosComponent} from '../components/empleados/empleados.component'
@Injectable({
	providedIn: 'root'
})

export class EmpleadoService {
	selectedEmpleado: Empleado;
	empleados: Empleado[];
	readonly url_api="http://192.168.0.3:5001/api/empleados";
	constructor(private http:HttpClient
		) {
		this.selectedEmpleado = new Empleado();
	 }

	getEmpleados(){
		return this.http.get(this.url_api);
	}
	postEmpleados(empleado: Empleado){
		return this.http.post(this.url_api,empleado);
	}
	putEmpleados(empleado:Empleado){
		console.log(empleado);
		return this.http.put(this.url_api+'/'+empleado._id,empleado);
	}
	deleteEmpleados(_id){
		return this.http.delete(this.url_api+'/'+_id);
	}

}
