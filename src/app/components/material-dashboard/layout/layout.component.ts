import { Component, OnInit,Renderer2 } from '@angular/core';
import { CreateScriptService } from 'src/app/services/create-script.service';
import { CreateStyleSheetService } from 'src/app/services/create-style-sheet.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private _createScriptService: CreateScriptService,
    private _loadCss: CreateStyleSheetService,
    private renderer2: Renderer2
  ) {
    _createScriptService.renderer = renderer2;
  }

  ngOnInit(): void {

    let styleUrls: string[] = new Array(
      '/assets/materialDashboard/css/nucleo-icons.css',
      '/assets/materialDashboard/css/nucleo-svg.css',
      '/assets/materialDashboard/css/material-dashboard.css?v=3.0.4',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700',
      'https://fonts.googleapis.com/icon?family=Material+Icons+Round'
    );

    let scriptUrls: string[] = new Array(
      '/assets/materialDashboard/js/core/popper.min.js',
      '/assets/materialDashboard/js/core/bootstrap.min.js',
      '/assets/materialDashboard/plugins/perfect-scrollbar.min.js',
      '/assets/materialDashboard/js/plugins/smooth-scrollbar.min.js',
      '/assets/materialDashboard/js/plugins/chartjs.min.js',
      '/assets/materialDashboard/js/chartInit.js',
      '/assets/materialDashboard/js/navigatorSelector.js',
      'https://buttons.github.io/buttons.js',
      '/assets/materialDashboard/js/material-dashboard.min.js'
    );

    this._loadCss.loadCSS(styleUrls);
    this._createScriptService.createScript(scriptUrls);
  }
}
