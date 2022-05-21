import db from '../database/db.js'

export const consultarFuncionario = async (id, callback) => {
    const query = `select * from programador where id_programador = ${id};`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}

export const criarFuncionario = async (req, res) => {
    const { nome, id_s, genero, data_nascimento, email } = req.body
    const query = `insert into programador values (default, ${id_s}, '${nome}', '${genero}', '${data_nascimento}', "${email}");`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}

export const removerFuncionario = async (req, res) => {
    const { id } = req.params
    const query = `delete from programador where id_programador = ${id};`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}

export const atualizarFuncionario = async (req, res) => {
    const { id, nome, genero, data_nascimento, email } = req.body
    const query = `UPDATE programador SET nome_programador = "${nome}", genero = "${genero}", data_nascimento = "${data_nascimento}", email = "${email}" WHERE id_programador = ${id};`
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