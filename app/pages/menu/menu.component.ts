import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'menu',
	templateUrl: './pages/menu/menu.component.html',
	styleUrls: ['./pages/menu/menu.component.css']
})

export class MenuComponent implements OnInit {

	constructor(private _routEx: RouterExtensions) { }

	ngOnInit() { }

	/**
	 * getWords
	 */
	public getWords() {
		this._routEx.navigate(["app-words"], {
			transition: {
				name: "slide",
				duration: 400,
				curve: "ease"
			}
		});
	}

	/**
	 * getWheater
	 */
	public getWheater() {
		this._routEx.navigate(["app-wheater"], {
			transition: {
				name: "slide",
				duration: 400,
				curve: "ease"
			}
		});
	}
}