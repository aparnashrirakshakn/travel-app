import './styles/style.scss'
import logo from './assets/logo.png';
import snap from './assets/snap.png';


const applogo = document.getElementById("app-logo");
applogo.setAttribute("src", logo);

const defaultImage = document.getElementById("card-img-top");
defaultImage.setAttribute("src", snap);