const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
const contract = solc.compile(source, 1).contracts[':InboxContract'];
 

module.exports = contract;