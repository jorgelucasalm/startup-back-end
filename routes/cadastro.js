import db from '../database/db.js'

export const cadastro_responsavel = async (req, res) => {
    const { nome, nick, cpf, endereco, telefone, email, senha, email_recuperacao } = req.body
    db.connect(() => {
        const query = `INSERT INTO responsavel VALUES ('${nome}', '${nick}', '${cpf}', '${endereco}', ${telefone}, '${email}', '${senha}', '${email_recuperacao}')`
        db.query(query)
    })
    res.status(200).end()
}

export const cadastro_pet = async (req, res) => {
    const { id, cpf_responsavel, nome, raca, peso, idade, tipo_sanguineo } = req.body
    db.connect(() => {
        const query = `INSERT INTO pet VALUES (${id}, '${cpf_responsavel}', '${nome}','${raca}', ${peso}, ${idade}, '${tipo_sanguineo}')`
        db.query(query)
    })
    res.status(200).end()
};