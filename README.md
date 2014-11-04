nano-server
================

**nano-server** is an ultra-lightweight **node.js** HTTP server for web development. It exposes a local directory through HTTP, simplifying development of front-end apps that require functionality blocked by cross-origin protections, e.g. [AJAX](https://developer.mozilla.org/en/docs/AJAX), [Canvas Image Processing](http://www.w3schools.com/tags/canvas_getimagedata.asp), [Web Audio Analysis](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), [WebGL textures](https://developer.mozilla.org/en-US/docs/Web/WebGL/Cross-Domain_Textures). 

`nano-server` provides some features that I didn't find in similar server packages:

 * Sends **gzipped** versions of files, if they are available.
 * Attempts to set the **Content-Type** header with the appropriate MIME type for browser-relevant file types.
 * **0** dependencies. Can be dropped into any project.

Usage
------

The simplest way to install `nano-server` is as a global install through **npm**:

```bash
  $ npm install -g nano-server
```

Then `nano-server` can be invoked as a command line executable:

```bash
  $ nano-server
```

By default, `nano-server` will run on port **5000** and use the current working directory as its document root. Optionally, a port number can be passed as first argument on the command line:

```bash
  $ nano-server 3000
```

The document root can be given as second argument, if desired.

```bash
  $ nano-server 5000 my_app/public_html
```

Since `nano-server` has no dependancies, it can be dropped directly into any project and invoked using `node` explicitly. This can be useful if you don't have the necessary permissions to do a global install on the machine you're using: 

```bash
  $ cp nano-server ~/path/to/project/
  $ cd ~/path/to/project/
  $ node nano-server
```

