require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name return sister prosper gesture lonely equal gift'; 
let testAccounts = [
"0xfe4f436ac9126ec2911266e7c0f5bf1cd41e170af39881f270b4b88e1a9f3cc3",
"0x1128f2476382511621772aac9d8f86988b8f14de6a3264ca3a974c1faea52ec5",
"0xd4703922809adbdf1491a4e2ff4752dfd71f4f685d9cff973026db59e985708e",
"0xcb32a364fa9b36c673d49f840bce4e29db1f7917b5844a75db3b4cfd3740f221",
"0x68c154ba5e8aef759d8d81ffa975749bfb196633b10ebf48b82d3494592a25f8",
"0x067214c5a4aae116cff85cf142679bda51c9b5c49c0a0529e947ca82bc1a8fc0",
"0xd0c00faa2017c983b4b753d9bfff920fa5d6ac329c5087e018bccacc673c493f",
"0x8b05f61ff84f17b88f3cf704dc7f3b24d59d050f0d1edf4a78faa9a8ccb32b71",
"0x759bbfb0bb900343d2ea4a27636a707da9f10e240e8d8d9b09e7784c858a9478",
"0x17a29047af15333d0f24d7419e62c4a5c7099516edd123daeb4f5a24f3967532"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

