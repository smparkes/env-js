whichJarFile = "envjs"
multiwindow = true;
whichInterpreter = whichJarFile + " interpreter jar";
load("dist/env.rhino.js");
load("test/call-load-test.js");
