import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './styles/Navbar.css';
import logo from '../images/logo_gmail.png';
import mas from '../images/mas_gmail-removebg-preview.png';
import tec from '../images/teclado.png';
import './styles/Icons.js';
const re = "Redactar" 
const rec = "Recibidos"
const de = "Destacados"
const pos = "Pospuestos"
const env = "Enviados"
const borr = "Borrados"
const imp ="Importantes"
const ch = "Chats"
const pro = "Programados"
const to = "Todos"
const sp = "Spam"
const pap = "Papelera"
const nre = "Nueva Reunion"
const mre = "Mis reuniones"
const Pr = "Principal"
const So = "Social"
const Prom = "Promociones"
const Fo = "Foros"
const Not = "Noticicaciones"



class Navbar extends React.Component {
    render() {
        return <div className = "menu___princial">
            <div className = "P__incial">
              <ul>
              <a href="/">
                    <ion-icon class="mr-2" name="menu"></ion-icon>
                    <img  className = "menu__logo" src={logo} alt="Logo"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    <ion-icon  name="search"></ion-icon>
                    <input type="search" class="menu__buscador rounded" placeholder="Buscar correo" 
                    aria-label="Search" aria-describedby="search-addon"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/"><ion-icon class="mr-2" name="help-circle-outline"></ion-icon>
                    <ion-icon class="mr-2" name="settings"></ion-icon>
                    <ion-icon class ="mr-2" name="apps"></ion-icon></a>
                    <a href="/"><img className="menu__avatar" 
                    src="https://www.gravatar.com/avatar?d=identicon" 
                    alt="Avatar " /></a>
                    <hr/>
                </ul>
              <ul>
              <button type="button" class="menu__button"><img src={mas}/>{re}</button>
              <a className="sub__s" href = "/">
              <ion-icon class= "sub_menu" name="square-outline"></ion-icon>
              <ion-icon class="menu_s" name="arrow-dropdown"></ion-icon>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <ion-icon class= "sub_menu" name="refresh"></ion-icon>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <ion-icon class= "sub_menu" name="more"></ion-icon>
              </a>
              <a href ="/">
              <ion-icon class="menu__dos_b" name="code"></ion-icon>
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <img className="menu__d"src={tec}></img>
              <ion-icon class="menu_s" name="arrow-dropdown"></ion-icon>
              </a>
              </ul>
              <ul>
                <div className="Ordernar">
                  <ul>
                    <div class="btn-group">
                    <ul>
                    <ion-icon class="menu__dos_d" name="tablet-portrait"></ion-icon> 
                    <button type="button" class="btn btn-default large">{Pr}</button>
                    </ul>
                    <ul>
                    <ion-icon name="people"></ion-icon>
                    <button type="button" class="btn btn-default">{So}</button>
                    </ul>
                    <ul>
                    <ion-icon name="pricetag"></ion-icon>
                    <button type="button" class="btn btn-default">{Prom}</button>
                    </ul>
                    <ul>
                    <ion-icon name="information-circle"></ion-icon>
                    <button type="button" class="btn btn-default">{Not}</button>
                    </ul>
                    <ul>
                    <ion-icon name="chatboxes"></ion-icon>
                    <button type="button" class="btn btn-deafult">{Fo}</button>
                    </ul>
                    </div>
                    </ul>
              </div>

              </ul>
        </div>

        <div className="menu__dos">
        <div>
          <a href="/" className="color__text"> 
            <ion-icon class="menu__dos_d" name="tablet-portrait"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp;{rec}
            <br/>
          </a>
        </div>


        <div>
          <a href="/" className="color__text"> 
          <ion-icon class="menu__dos_d" name="star"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{de}
          <br/>
          </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="time"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{pos}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="send"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{env}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="document"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{borr}
        <br/>
        </a>
        </div>


        <div>
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Más
            </button>
        </div>
        </div>
        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="pricetag"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{imp}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="quote"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{ch}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="alarm"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{pro}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="mail"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{to}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="alert"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{sp}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="trash"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{pap}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="videocam"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{nre}
        <br/>
        </a>
        </div>


        <div>
        <a href="/" className="color__text"> 
        <ion-icon class="menu__dos_d" name="calendar"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{mre}
        <br/>
        </a>
        </div>
        </div>
        </div>
    }
}
export default Navbar;
