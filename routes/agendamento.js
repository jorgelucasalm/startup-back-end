import db from '../database/db.js'

export const nova_consulta = async (req, res) => {
    const { id, id_pet, categoria, data, turno, tratamento_continuo, nome_medico, autorizacao, motivacao, numero_dose, uso_medicacao, medicacao, termino, tipo_exame } = req.body

    db.connect(() => {
        const query = `INSERT INTO nova_consulta VALUES (${id},${id_pet}, '${categoria}', '${data}', '${turno}', ${tratamento_continuo}, '${nome_medico}', ${autorizacao}, '${motivacao}', ${numero_dose}, ${uso_medicacao}, '${medicacao}', '${termino}', '${tipo_exame}')`
        db.query(query)
    })
    res.status(200).end()
}

export const listarAgenda = async (callback) => {
    const query = `select * from nova_consulta;`
    db.query(query, (err, results, fields) => {
        if (callback != null) {
            callback(results)
        }
    })
}