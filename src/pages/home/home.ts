import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
casas=[
  {id:0, nombre:"Condominios Providencia", descripcion:"condominio de lujo, tres recámaras, sala comedor, cocina integral, 4.5 baños, dos cajones de estacionamiento techados, 180 metros de construcción, seguridad las 24 horas del día.", precio: "$6´150,000", banos: "4.5", recamaras: "3", metros: "180 m²", vendedor: "Gilberto Rangel", telefono: " 33 2360-9056, 33 2238-0988, 3317111039", imagen: "../assets/condominiosprovidencia.jpg"},
  {id:1, nombre:"Oficinas en renta", descripcion:"oficinas en renta amuebladas, todos los servicios", precio: "$4100 al mes", banos: "0", recamaras: "0", metros: "15 m²", vendedor: "Priscilla Foncerrada", telefono: "33 3167-4107, 1814-0978", imagen: "../assets/oficinasprovidencia.jpg"},
  {id:2, nombre:"Espacio Ejecutivo", descripcion:"Fast Office, centro de negocios, te ofrece Oficinas Virtuales y Físicas. Servicios básicos y de limpieza y mobiliario incluídos. Llama al 33 16402751. Dale una imagen profesional a tu empresa. ZONA CHAPULTEPEC AV. HIDALGO #1383. MAGNÍFICA UBICACIÓN.", precio: "$4,500 por mes", banos: "3", recamaras: "0", metros: "5 m²", vendedor: "María Grageda", telefono: "", imagen: "../assets/espacioejecutivo.jpeg"},
  {id:3, nombre:"Casa en Santa Tere", descripcion:"CASA cerca BARRIO SANTA TERE, 4 Recamaras, 2 1/2 baños, No cochera", precio: "$1,600,000", banos: "2.5", recamaras: "4", metros: "170 m²", vendedor: "Cecilia Renteria", telefono: "1657-2969, 33 2082-1471", imagen: "../assets/casasantatere.jpg"},
  {id:4, nombre:"Casa Loma Bonita", descripcion:"4 Amplias Recámaras, 4.5 baños, Sala, Comedor, Cocina integral, Cochera para 2 autos, Patio de servicio con piso, Amplia terraza en segundo y tercer nivel, Medidas 6x20, Cercana a: Patria Oriente, Av. Malécon, Av. Tonaltecas, San Gaspar, Periférico", precio: "$1,300,000", banos: "4", recamaras: "4", metros: "120 m²", vendedor: "Elizabeth", telefono: "3310888500", imagen: "../assets/casaloma.jpg"},
  {id:5, nombre:"Departamento Gran Plaza", descripcion:"CERCA Gran Plaza, bien ubicado, departamento amueblado, de 1 recámara, sala, colchones nuevos. Rapido acceso a Lazaro Cardenas. 1 de la Gran Plaza. Diseño interior profesional.", precio: "$7,100", banos: "1", recamaras: "1", metros: "60 m²", vendedor: "Juan Jones", telefono: "33 3724-9845", imagen: "../assets/departamentogran.jpg"},
  {id:6, nombre:"Jardines del Country", descripcion:"Departamento en renta de dos habitaciones, nivel 10, con vista privilegiada. El departamento cuenta con aire acondicionado en área social y en recámara principal, dos baños. Alberca, gimnasio.", precio: "$17,000", banos: "2", recamaras: "2", metros: "114 m²", vendedor: "María Issac", telefono: "3312303185", imagen: "../assets/jardines.jpeg"},
  {id:7, nombre:"Departamento preventa", descripcion:"Departamentos de lujo, en condominio inmejorable ubicación, 2 roof garden, 10 locales, 96 cajones de estacionamiento. Cerca de escuelas, centros comerciales y vías de acceso rápidas. Fecha de entrega Noviembre 2019.", precio: "$3,649,130.00", banos: "2", recamaras: "2", metros: "99 m²", vendedor: "Leticia Pérez", telefono: "3121-2403 / 3121-2402", imagen: "../assets/departamentospreventa.jpg"},
  {id:8, nombre:"Departamento en Lagos del Country", descripcion:"Solo 6 unidades en preventa, departamentos listos en diciembre de 2018, aprovecha precio de preventa, 2 recamaras, 2.5 baños, elevador, cocina con granito, a un paso de Plaza Patria, del Country Club, y sobre Av. Patria super ubicados! ", precio: "$2,900,000.00", banos: "2.5", recamaras: "2", metros: "109 m²", vendedor: "Francisco Ramirez", telefono: "3311013495", imagen: "../assets/departamentocountry.jpeg"},
  {id:9, nombre:"Refugio de Lujo", descripcion:"Preciosa casa de lujo hecha con contenedores nuevos, acabados de lujo, griferia importada, pisos y recubrimientos italianos importados de lujo, refugio excelente para lugares como Mazamitla, única en su tipo en Jalisco, solo para exigentes.", precio: "$94,999 USD", banos: "1.5", recamaras: "1", metros: "75m²", vendedor: "Curiel Design", telefono: "3333687475", imagen: "../assets/refugio.jpg"},

]
informacion = InformacionPage;
favoritos = FavoritosPage;
favorito = [];
  constructor(public navCtrl: NavController) {

  }
  clickInformacion(c){
    this.navCtrl.push(this.informacion,{casa:c, favoritos:this.favorito})
  }

  clickFavoritos(){
    this.navCtrl.push(this.favoritos, {favoritos:this.favorito} );
  }

}
