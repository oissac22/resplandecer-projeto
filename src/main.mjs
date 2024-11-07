import express from "express";
import { inserirUsuario } from "./utils/db.mjs";

const Api = express();

Api.use(express.json({
    inflate: false
}))

Api.use(express.urlencoded({
    inflate: false
}))

Api.post("/api/user", function(req, res) {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    inserirUsuario(name, password, email);
    res.send("Registro inserido com sucesso");
})

Api.use(express.static("src/view/"))

Api.listen(4000);