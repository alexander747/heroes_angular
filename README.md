## Importante

Para el manejo de datos se creo un servicio que apunta hacia una api creada en el lenjuaje php, el servicio se encuentra dentro de la carpeta services, se creo un archivo de nombre karma.conf.json ubicado en la raiz del proyecto necesario para tener acceso a la api desde el puerto local 4200 de angular el cual es llamado desde el archivo angular.json en test linea 80.

El component home carga los componentes de las targetas, el loading y el componente para votar.
El manejo de los datos se realizo en su mayoria por aproximación por template ya que la aplicacion no amerito hacerla aproximación por data por su tamaño.

Pasos para arrancar el proyecto
tener instalado node js
tener instalado angular cli
node install
ng serve -o

# Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
