import { Component, OnInit, Renderer2 } from '@angular/core';
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
    private renderer2: Renderer2,
  ) {
    _createScriptService.renderer = renderer2;
  }

  ngOnInit(): void {
    let styleUrls: string[] = new Array(
      'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback',
      '/assets/adminLTE/plugins/fontawesome-free/css/all.min.css',
      '/assets/adminLTE/dist/css/adminlte.min.css'
    );

    let scriptUrls: string[] = new Array(
      '/assets/adminLTE/plugins/jquery/jquery.min.js',
      '/assets/adminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/adminLTE/dist/js/adminlte.min.js'
    );

    this._loadCss.loadCSS(styleUrls);
    this._createScriptService.createScript(scriptUrls);
  }
}
