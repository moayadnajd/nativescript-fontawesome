# Nativescript FontAwesome

## A simpler way to use FontAwesome icons with NativeScript

<img src="http://codeobia.com/screenshots/nativescript-fontawsome.png" width="300">

## Install

```
tns plugin add nativescript-fontawesome
```

[click here to Download fontawesome-webfont.ttf](https://github.com/moayadnajd/nativescript-fontawesome/blob/master/fonts/fontawesome-webfont.ttf) or download from [fontawesome website](http://fontawesome.io/)

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