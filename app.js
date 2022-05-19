import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { cadastro_pet, cadastro_responsavel } from './routes/cadastro.js'
import { listarAgenda, nova_consulta } from './routes/agendamento.js'

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

app.get('/agendas', async (req, res) => {
    listarAgenda((e) => { return res.json(e) })
})

app.use('/cadastro-responsavel', cadastro_responsavel)
app.use('/cadastro-pet', cadastro_pet)
app.use('/nova-consulta', nova_consulta)


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