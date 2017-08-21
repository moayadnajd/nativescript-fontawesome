# Nativescript FontAwesome

## A simpler way to use FontAwesome icons with NativeScript


* call the init function in the app.ts:

```
import * as application from 'application';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true; <-- Optional. Will output the css mapping to console.
TNSFontIcon.paths = {
  'fa': 'font-awesome.css',
  'ion': 'ionicons.css'
};
TNSFontIcon.loadCss();

application.resources['fonticon'] = fonticon;
application.start({ moduleName: 'main-page' });
```

## Install

```
tns plugin add nativescript-fontawesome
```

[click here to Download fontawesome-webfont.ttf](https://github.com/moayadnajd/nativescript-fontawesome)

* Place font icon `.ttf` file in `app/fonts`, like below:
  
```
app/fonts/fontawesome-webfont.ttf
```
* call the init function in the you'r  app.ts:
```
import { Fontawesome } from 'nativescript-fontawesome';
Fontawesome.init();

```
### Usage

```
<Label class="fa" text="{{'fa-bluetooth' | fontawesome }}"></Label> 
``` 

## Credits

[nativescript-fonticon](https://github.com/NathanWalker/nativescript-fonticon)