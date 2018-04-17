import { Component, OnInit } from '@angular/core';
import { DataModalString } from './data.modal';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

import * as dialogs from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'home',
	templateUrl: './pages/home/home.component.html',
	styleUrls: ['./pages/home/home.component.css']
})

export class HomeComponent implements OnInit {


	/*
	*Place for the declaration of the variables
	*/
	_dato: DataModalString;
	_viewResponse: boolean = false;
	_newCadena: string;



	constructor(private _routEx:RouterExtensions) {
		this._dato = new DataModalString();
	}

	ngOnInit() { }


	/**
	 * changePositionString
	 * Function that allows changing the order of the word test or the words that are entered.
	 */
	public changePositionString() {
		this._viewResponse = false;
		if (this._dato._word !== "" && this._dato._word !== undefined && this._dato._word !== null) {			
			let cadena = this._dato._word;
			this._newCadena = "";
			let size = cadena.length;
			for (let i = 0; i < cadena.length + 1; i++) {
				this._newCadena = this._newCadena + cadena.charAt(cadena.length - i);
			}
			this._viewResponse = true;
		} else {
			this.viewMessage("Por favor ingresa una palabra");
		}

	}
	/**
	 * viewMessage
	 * function that allows to inform the user about lack of data
	 */
	public viewMessage(mensaje) {
		dialogs.alert({
			title: "Mensaje",
			message: mensaje,
			okButtonText: "Aceptar"
		}).then(() => {
			console.log("Dialog closed!");
		});
	}

	/**
	 * getBack
	 * navigation back page
	 */
	public getBack() {
		this._routEx.back();
	}
}