/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core';

let consoleManager = LCManager.shared()
console.log(consoleManager.isVisible)
consoleManager.isVisible = true
console.log(consoleManager.isVisible)
consoleManager.print("PRINT!")

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
