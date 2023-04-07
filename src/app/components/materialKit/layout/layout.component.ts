import { Component, OnInit, Renderer2 } from '@angular/core';
import { CreateScriptService } from 'src/app/services/create-script.service';
import { CreateStyleSheetService } from 'src/app/services/create-style-sheet.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(
    private _createScriptService: CreateScriptService,
    private _loadCss: CreateStyleSheetService,
    private renderer2: Renderer2,
  ) {
    _createScriptService.renderer = renderer2;
  }

  ngOnInit(): void {
    let styleUrls: string[] = new Array(
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700',
      '/assets/materialKit/img/apple-icon.png',
      '/assets/materialKit/img/favicon.png',
      '/assets/materialKit/css/nucleo-icons.cs',
      '/assets/materialKit/css/nucleo-svg.css',
      'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
      '/assets/materialKit/css/material-kit.css?v=3.0.4',
    );

    let scriptUrls: string[] = new Array(
      'https://kit.fontawesome.com/42d5adcbca.js',
      '/assets/materialKit/js/core/popper.min.js',
      '/assets/materialKit/js/core/bootstrap.min.js',
      '/assets/materialKit/js/plugins/perfect-scrollbar.min.js',
      '/assets/materialKit/js/plugins/countup.min.js',
      '/assets/materialKit/js/plugins/choices.min.js',
      '/assets/materialKit/js/plugins/prism.min.js',
      '/assets/materialKit/js/plugins/highlight.min.js',
      '/assets/materialKit/js/plugins/rellax.min.js',
      '/assets/materialKit/js/plugins/tilt.min.js',
      '/assets/materialKit/js/plugins/choices.min.js',
      '/assets/materialKit/js/plugins/parallax.min.js',
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI",
      '/assets/materialKit/js/material-kit.min.js?v=3.0.4',
      "/assets/materialKit/js/stateScript.js"
    );

    this._loadCss.loadCSS(styleUrls);
    this._createScriptService.createScript(scriptUrls);
  }
}
