require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food wasp response scrub protect hen light army gas'; 
let testAccounts = [
"0xd9c3a314c5950fe5c63ba846f41f60e1670ed4ddeda875c1660b0ccd1180c78e",
"0x9bc2fd472ec057fd7163d4bc463e4da344c51415246c853e2a88fc7222970731",
"0x2c212f329ff7ed855b3941776b0b4a35852e7375861463f0b3b2ae0c7853f536",
"0x46856827a02f4fe4507be55099658b7294f5c731fe6a7e43f4f3a76d8e72ac33",
"0x0b430a4c59ff459a7783a673b0a159972a6eddc692834dfa199da987476571e5",
"0xb50ac4409da209002f655d14f8a4674fba2b797eab823819865546620c5dfe53",
"0x6c174e36bcfd95f1b7756d469796a9f9c2d3fdf9f93f4d69d36e8e28de2db883",
"0xd8160ff6f9d84c872923233c89466dcb85f0586f8a4deb6f98da93517f5fb5ca",
"0x3dee7a8fb15ecee1f31625d429af9b15fccf346efeb958a6ca48bda8c3c6828c",
"0xbbfe819a68dcf7d8536a68a4fb58346718ba2ac40a9eb297efff4f887d0fb7de"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


