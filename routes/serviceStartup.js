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