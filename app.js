import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { listarStartup, consultarStartup } from './routes/serviceStartup.js'

const PORT = 3000
const app = express()

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({
        mensagem: 'oi'
    })
});

app.get('/startups', async (req, res) => {
    listarStartup((e) => { return res.json(e) })
})

app.get('/startups/:id', async (req, res) => {
    const { id } = req.params
    consultarStartup(id, (e) => { return res.json(e) })
})

// app.use('/cadastro-responsavel', cadastro_responsavel)


app.use(async (req, rest, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use(async (error, req, res) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
});

app.listen(PORT, () => console.log("Servidor rodando na porta 3000"))