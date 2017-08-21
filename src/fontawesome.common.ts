
import * as application from 'tns-core-modules/application';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
export class Common {
  public static init(): void {
    try {
      let resources = application.getResources();
      if (typeof resources['fontawesome'] === 'undefined') {
        TNSFontIcon.debug = false;
        TNSFontIcon.paths = {
          'fa': 'tns_modules/nativescript-fontawesome/font-awesome.css'
        };
        TNSFontIcon.loadCss();
        resources['fontawesome'] = fonticon;
      }
      application.setResources(resources);
    } catch (e) {
      console.log(e);
    }
  }
}

