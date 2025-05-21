import express from "express"
import conectaNoBancoDeDados from "./config/dbConnect.js";
import livro from "./models/Livros.js"

const conexao = await conectaNoBancoDeDados()
conexao.on("error", (erro) => {
    console.error("Erro na conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão bem sucedida")
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find()
    res.status(200).json(listaLivros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro Criado")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

export default app