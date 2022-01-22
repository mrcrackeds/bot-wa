let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713107246]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana  : 085713107246
│ • Gopay : 085713107246
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler