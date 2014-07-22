nano-server.js
================

**nano-server.js** is a lightweight **node.js** HTTP server for web development. It exposes a local directory through HTTP, appropriately sets the MIME types for files it sends and will send gzip compressed versions of requested files if they are available.

Usage
------

`nano-server.js` is invoked as a node script on the command line:

```bash
  $ node nano-server.js
```

If the file `nano-server.js` is made to be executable, it can be started without invoking `node` explicitly:

```bash
  $ chmod 744 nano-server.js
  $ ./nano-server.js
```

By default, `nano-server.js` will run on port **5000** and use the current working directory as its document root. Optionally, a port number can be passed as first argument on the command line:

```bash
  $ ./nano-server.js 3000
```

The document root can be given as second argument, if desired.

```bash
  $ ./nano-server.js 5000 my_app/public_html
```
