import { onSaveButtonClick, onCancelButtonClick, onPlanButtonClick } from "../client/js/app";

import './styles/style.scss'
import logo from './assets/logo.png';
import snap from './assets/snap.png';


const applogo = document.getElementById("app-logo");
applogo.setAttribute("src", logo);


document.addEventListener('DOMContentLoaded', () => {

    const planButton = document.getElementById('btn-plan');
    planButton.addEventListener('click', onPlanButtonClick);

});