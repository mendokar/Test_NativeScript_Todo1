import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';
import { GetWeatherService } from '../../services/getWheater.service';
import { WheatherModal } from './wheather.modal';
import { Page } from 'tns-core-modules/ui/page/page';
import { GlobalComponent } from '../../functions/getLocation.modal';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';


import * as dialogs from "ui/dialogs";

@Component({
	selector: 'weather',
	templateUrl: './pages/weather/weather.component.html',
	styleUrls: ['./pages/weather/weather.component.css'],
	providers: [GetWeatherService],
	animations: [
		trigger('menuState', [
			state('hide', style({ transform: 'rotate(0)' })),
			state('show', style({ transform: 'rotate(-180deg)' })),
			transition('hide => show', [style({ transform: 'rotate(-360deg)' }), animate('350ms ease-out')]),
			transition('show => hide', animate('350ms ease-in'))
		])
	]
})

export class WeatherComponent implements OnInit {

	humidity: any;
	temperature: any;
	precipProbability: any;
	icon: any;
	summary: any;
	timeZone: any;
	_globalfunctions: GlobalComponent;
	_dataWheater: WheatherModal;
	constructor(private _page: Page, private _serviceWheater: GetWeatherService) {
		this._dataWheater = new WheatherModal();
		this._page.actionBarHidden = true;
		this._globalfunctions = new GlobalComponent();
	}

	ngOnInit() {
		this._globalfunctions.loadingView();
		this.getLocationDevice();
	}

	_rotateImage = "";
	/**
	 * rotateImage
	 */
	public rotateImage() {
		this._rotateImage == "hide" ? this.show() : this.hide();
		console.log(this._rotateImage);
	}

	/**
	 * show
	 */
	public show() {
		this._rotateImage = "show";
	}

	public hide() {
		this._rotateImage = "hide";
	}

	/**
	 * name
	 */
	public getDataServiceAPI() {

		this._serviceWheater.getResponseInfo(this._dataWheater).subscribe(response => {
			//console.log(JSON.stringify(response));
			var strJSON = JSON.stringify(response);
			var objJSON = eval("(function(){return " + strJSON + ";})()");
			let status = objJSON.status;
			if (status === 200) {
				this.timeZone = objJSON._body.timezone;
				this.summary = objJSON._body.currently.summary;
				this.icon = objJSON._body.currently.icon;
				this.precipProbability = objJSON._body.currently.precipProbability;
				this.precipProbability = this.calculateSummary(this.precipProbability);
				this.temperature = objJSON._body.currently.temperature;
				this.humidity = objJSON._body.currently.humidity;

				setTimeout(() => {
					this._globalfunctions.loadingHide();
				}, 2000);


			} else {
				this.viewMessage("Error al consultar el estado del tiempo : " + objJSON.statusText)
			}
		})
	}

	public calculateSummary(data) {
		return parseFloat(data) * 100;
	}


	/**
	 * getLocationDevice
	 */
	public getLocationDevice() {
		this._globalfunctions.getUrlLocation().then(response => {
			console.log("Response location" + JSON.stringify(response.latitude));
			console.log("Response location" + JSON.stringify(response.longitude));
			this._dataWheater._latitude = response.latitude.toString();
			this._dataWheater._longitude = response.longitude.toString();
			this.getDataServiceAPI();

		})
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
	 * reloadData
	 */
	public reloadData() {
		this._globalfunctions.loadingView();
		this.getLocationDevice();
	}
}