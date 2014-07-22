#!/usr/local/bin/node
/*
* simple-server.js: a lightweight node.js HTTP server for web development.
* Copyright (c) 2014 Tarek Sherif
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

"use strict";

var http = require("http");
var fs = require("fs");
var version = "0.2.0";
var mime = require('mime');
var port = process.argv[2] || 5000;
var root = process.argv[3] || ".";

http.createServer(function (req, res) {

  var path = root + "/" + req.url.replace(/^\/+/, "");

  fs.stat(path, function(err, stat) {
    if (stat && stat.isDirectory()) {
      fs.readFile(path + "/index.html", function(err, content) {
        if (err) {
          listDirectory(res, path);
        } else {
          sendFile(res, mime.lookup(path), content);
        }
      });
    } else {
      fs.readFile(path, function(err, content) {
        if (err) {
          fs.readFile(path + ".gz", function(err, content) {
            if (err) {
              res.writeHead(404);
              res.end("File " + req.url + " not found.");
            } else {
              res.setHeader("Content-Encoding", "gzip");
              sendFile(res, mime.lookup(path), content);
            }
          });
        } else {
          sendFile(res, mime.lookup(path), content);
        }
      });
    }
  })
 

}).listen(port, function() {
  console.log("simple-server v" + version + " running in '" + root + "' started on port " + port + ".");
});

function sendFile(res, mimeType, content) {
  res.writeHead(200);
  if (mime_type) {
    res.setHeader("Content-Type", mimeType);
  }
  res.end(content);
}

function listDirectory(res, path) {
  fs.readdir(path, function(err, files) {
    var content = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin-left: 25px">';
    content += '<h2>Listing files for ' + path.replace(/^\./, "") + '</h2>';
    content += files.map(function(file) { 
      return '<a href="' + path + '/' + file + '">' + file + '</a>';
    }).join('<BR>');
    content += '</body></html>';
    res.end(content);
  });
}
