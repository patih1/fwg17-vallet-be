const db = require("../lib/db.lib")

exports.allWallet = async() => {
    const sql = `SELECT * FROM "wallet"`
    const values = []
    const {rows} = await db.query(sql, values)
    return rows
}