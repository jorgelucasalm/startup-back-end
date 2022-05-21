import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { listarStartup, consultarStartup, criarStartup, removerStartup, atualizarStartup } from './routes/serviceStartup.js'
import { consultarFuncionario, criarFuncionario, removerFuncionario, atualizarFuncionario } from './routes/serviceFuncionario.js'

const PORT = 8080
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

app.use('/create-startups', criarStartup)

app.use('/remove-startups/:id', removerStartup)

app.use('/update-startups', atualizarStartup)

app.get('/startups/:id', async (req, res) => {
    const { id } = req.params
    consultarStartup(id, (e) => { return res.json(e) })
})

// Funcionarios

app.use('/create-funcionario', criarFuncionario)

app.get('/funcionario/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    consultarFuncionario(id, (e) => { return res.json(e) })
})

app.delete('/remove-programador/:id', removerFuncionario)

app.put('/update-programador/', atualizarFuncionario)


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