simple-server.js
================

**simple-server.js** is a lightweight **node.js** HTTP server for web development. It exposes a local directory through HTTP, appropriately sets the MIME types for files it sends and will send gzip compressed versions of requested files if they are available.

Usage
------

`simple-server.js` is invoked as a node script on the command line:

```bash
  $ node simple-server.js
```

If the file `simple-server.js` is made to be executable, it can be started without invoking `node` explicitly:

```bash
  $ chmod 744 simple-server.js
  $ ./simple-server.js
```

For this usage, `simple-server.js` assumes that `node` is installed in `/usr/local/bin`, the **shebang** statement on the first line of the `simple-server.js` script will have to be modified to point to the location of `node`.

By default, `simple-server.js` will run on port **5000** and use the current working directory as its document root. Optionally, a port number can be passed as first argument on the command line:

```bash
  $ simple-server.js 3000
```

The document root can be given as second argument, if desired.

```bash
  $ simple-server.js 5000 my_app/public_html
```