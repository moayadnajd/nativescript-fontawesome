import "./bundle-config";
import * as application from 'tns-core-modules/application';
//init fontawesome in your app
import { Fontawesome } from 'nativescript-fontawesome';
Fontawesome.init();

application.start({ moduleName: "main-page" });
