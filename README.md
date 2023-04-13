# Proje oluştur
`ng new [name]`

# Enviroment Build
`ng build --configuration=prod`

# Projeyi tarayıcı ile aç
`ng serve --open or (--o)`

# Uygulamayı farklı bir porttan ayağa kaldırmak istersek
`ng serve --port [port number]`

# CLI aracılığıyla Component oluşturma
`ng g c [name]` StandAlone olarak oluşturmak istersek `--standalone` komutunu eklememiz gerekmektedir

# CLI aracılığıyla Directive oluşturma
`ng g d [name]`

# CLI aracılığıyla Service oluşturma
`ng g s [name]`

# CLI aracılığıyla Pipe oluşturma
`ng g p [name]`

# CLI aracılığıyla Guard oluşturma
`ng g g [name]`

# CLI aracılığıyla Module oluşturma
`ng g m [name]`

# CLI aracılığıyla Intercepter oluşturma
`ng g interceptor [name]` (maalesef `ng g i` işe yaramayacaktır)

# Bootstrap install by npm
`npm install bootstrap@5.2.3`

# ngrx Install
`ng add @ngrx/store@latest`

# Spec.ts oluşumunu engellemek istersek
`--skip-test` komutunu generate komutlarının sonuna eklemeliyiz ya da `ng new my-app --skip-test` şeklinde de projeyi create edebiliriz

# NPM Packages
`npm install ngx-toastr --save`
`npm install sweetalert2 @sweetalert2/ngx-sweetalert2`
`npm install ngx-spinner --save`
`npm i ngx-pagination`
`npm i @angular/pwa` bu paket aslında Angular uygulamasının Progressive Web App mantığında çalışmasını sağlar,internet olmasa bile cache üzerinden proje çalışır
`npm i http-server` PWA sadece production ortamda çalışır,yüklediğimiz bu paket ise uygulamamızın production modda çalışıyormuş gibi görünmesini sağlar


# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
