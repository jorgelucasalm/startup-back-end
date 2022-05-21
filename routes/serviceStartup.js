import db from '../database/db.js'

export const listarStartup = async (callback) => {
    const query = `select * from startup;`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}

export const consultarStartup = async (id, callback) => {
    const query = `select p.id_programador, p.genero, p.data_nascimento,p.email,p.nome_programador  from programador as p join startup as s on p.id_startup = s.id_startup where s.id_startup = ${id};`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}

export const criarStartup = async (req, res) => {
    const { nome, sede } = req.body
    console.log(nome, sede)
    const query = `insert into startup values (default, '${nome}', '${sede}');`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}

export const removerStartup = async (req, res) => {
    const { id } = req.params
    const query = `delete from startup where id_startup = ${id};`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}

export const atualizarStartup = async (req, res) => {
    const { id, nome, sede } = req.body
    const query = `UPDATE startup SET nome_startup = "${nome}", cidade_sede = "${sede}" WHERE id_startup = ${id};`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}

export const cadastro_responsavel = async (req, res) => {
    const { nome, nick, cpf, endereco, telefone, email, senha, email_recuperacao } = req.body
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}