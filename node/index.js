const fs = require("fs");
const credit = {
    ca: "fullchain please",
    key: "private key please",
    cert: "cert please"
}
const systemConfigs = {
    port: 20500,
    password: "tempPassword"
};

const express = require("express");
const {ExpressPeerServer} = require("peer");
const app = express();
const https = require("https").createServer(credit, app);

const peer = ExpressPeerServer(https, {
    proxied: true,
    debug: true,
    path: "/peer",
    ssl: {}
});

let lists = {
    videoProvider: 0,
    beProvidedCamera: 0
}

app.use(peer);

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

peer.on("connection", (c) => {
    if (c.id == "videoProvider" && !lists.videoProvider) {
        lists.videoProvider = c;
    }
    else if (c.id == "beProvidedCamera" && !lists.beProvidedCamera) {
        lists.beProvidedCamera = c;
    }
});

peer.on("disconnect", (c) => {
    if (c.id == "videoProvider" && lists.videoProvider) {
        lists.videoProvider = 0;
    }
    else if (c.id == "beProvidedCamera" && lists.beProvidedCamera) {
        lists.beProvidedCamera = 0;
    }
})

https.listen(systemConfigs.port, "0.0.0.0");
console.log("Server is starting!")
