# Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

# Importante

Para el manejo de datos se creó un servicio que apunta hacia una api creada en el lenguaje php, el servicio se encuentra dentro de la carpeta services, se creó un archivo de nombre karma.conf.json ubicado en la raíz del proyecto necesario para tener acceso a la api desde el puerto local 4200 de angular el cual es llamado desde el archivo angular.json en test linea 80.

El component home carga los componentes de las tarjetas, el loading y el componente para votar.
El manejo de los datos se realizó en su mayoría por aproximación por template ya que la aplicación no amerito hacerla aproximación por data por su tamaño.

# Porque css

Se utilizó css puro ya que el proyecto es pequeño además de que esto ayuda a que se compile más rápido.

# Arrancar el proyecto

tener instalado node js
tener instalado angular cli
node install
ng serve -o

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
