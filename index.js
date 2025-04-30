const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send(`
        <h1>Bem-vindo ao Cinema!</h1>
        <ul>
            <li><a href="/filme/contador2">O Contador 2</a></li>
            <li><a href="/filme/branca-de-neve">Branca de Neve</a></li>
            <li><a href="/filme/minecraft">Um Filme Minecraft</a></li>
        </ul>
        <p><a href="/filmes">Ver todos os filmes</a></p>
    `);
});


app.get("/filmes", function(req, res) {
    res.send(`
        <h1>Lista de Filmes</h1>
        <ul>
            <li><strong>O Contador 2:</strong> Quando um conhecido é assassinado, deixando para trás uma mensagem enigmática, Christian Wolff se sente compelido a resolver o caso. <a href="/filme/contador2">Ver mais</a></li>
            <li><strong>Branca de Neve:</strong> No mais novo live-action Branca de Neve, uma rainha má e bela resolve, por inveja e vaidade, mandar matar sua enteada, BRANCA DE NEVE, a mais linda de todas. <a href="/filme/branca-de-neve">Ver mais</a></li>
            <li><strong>Um Filme Minecraft:</strong> Quatro desajustados são transportados para Overworld, um bizarro país das maravilhas cúbico onde impera a imaginação. <a href="/filme/minecraft">Ver mais</a></li>
        </ul>
        <a href="/">Voltar para Home</a>
    `);
});


app.get("/filme/contador2", function(req, res) {
    res.send(`
        <h1>O Contador 2</h1>
        <p>Quando um conhecido é assassinado, deixando para trás uma mensagem enigmática, Christian Wolff se sente compelido a resolver o caso.</p>
        <a href="/">Voltar para Home</a>
    `);
});


app.get("/filme/branca-de-neve", function(req, res) {
    res.send(`
        <h1>Branca de Neve</h1>
        <p>No mais novo live-action Branca de Neve, uma rainha má e bela resolve, por inveja e vaidade, mandar matar sua enteada, BRANCA DE NEVE, a mais linda de todas.</p>
        <a href="/">Voltar para Home</a>
    `);
});


app.get("/filme/minecraft", function(req, res) {
    res.send(`
        <h1>Um Filme Minecraft</h1>
        <p>Quatro desajustados - Garrett “The Garbage Man” Garrison, Henry, Natalie e Dawn – são transportados por um misterioso portal para Overworld: um bizarro país das maravilhas cúbico onde impera a imaginação.</p>
        <a href="/">Voltar para Home</a>
    `);
});

app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});
