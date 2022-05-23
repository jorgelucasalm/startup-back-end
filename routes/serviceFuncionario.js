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
    var msgError
    const query = `insert into programador values (default, ${id_s}, '${nome}', '${genero}', '${data_nascimento}', "${email}");`
    db.connect(() => {
        // db.query(query, ((err) => res.json({ error: err.sqlMessage }).status(200).end()))
        db.promise().query(query).then(() => {
            res.status(200).json({ status: "ok" }).end()
        }).catch((err) => res.status(409).json({ err: err.sqlMessage }))
    })
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

export const getLinguagem = async (id, callback) => {
    const query = `SELECT lp.nome_linguagem FROM startups.programador_linguagem as pl
    join programador as p on p.id_programador = pl.id_programador
    join linguagem_programacao as lp on lp.id_linguagem = pl.id_linguagem
    where p.id_programador = ${id};`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}

export const getAllLinguagem = async (callback) => {
    const query = `select nome_linguagem, id_linguagem from linguagem_programacao;`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}


export const adicionarLinguagemProgramador = async (req, res) => {
    const { id_p, id_l } = req.body
    const query = `insert into linguagem_programacao value (${id_p},${id_l});`
    db.connect(() => {
        db.query(query)
    })
    res.status(200).end()
}