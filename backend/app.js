const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {

        res.writeHead(200);

        res.end(
            JSON.stringify({
                status: "success",
                message: "Backend Sistem Rekonsiliasi Kas & Bank aktif"
            })
        );

        return;
    }

    if (req.url === "/api/status") {

        res.writeHead(200);

        res.end(
            JSON.stringify({
                status: "online",
                application: "SIA Rekonsiliasi Kas dan Bank"
            })
        );

        return;
    }

    res.writeHead(404);

    res.end(
        JSON.stringify({
            status: "error",
            message: "Endpoint tidak ditemukan"
        })
    );

});

server.listen(PORT, () => {

    console.log(
        `Server berjalan pada http://localhost:${PORT}`
    );

});