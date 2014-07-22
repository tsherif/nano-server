nano-server
================

**nano-server** is a lightweight **node.js** HTTP server for web development. It exposes a local directory through HTTP, appropriately sets the MIME types for files it sends and will send gzip compressed versions of requested files if they are available.

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

By default, `nano-server.js` will run on port **5000** and use the current working directory as its document root. Optionally, a port number can be passed as first argument on the command line:

```bash
  $ nano-server 3000
```

The document root can be given as second argument, if desired.

```bash
  $ nano-server 5000 my_app/public_html
```

Since `nano-server` has no dependancies, it can be dropped into a project directly and invoked using `node` explicity: 

```bash
  $ cp nano-server ~/path/to/project/
  $ cd ~/path/to/project/
  $ node nano-server
```

