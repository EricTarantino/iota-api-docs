////////////////////////////////////////////////
// Generate an address
////////////////////////////////////////////////

const Iota = require('@iota/core');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
});

// The seed that will be used to generate an address
const seed =
  'PUETPSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

// Define the index of the address
let index = 0;

// Define the security level of the address
const securityLevel = 2;

// If any address is spent, this method returns the next unspent address with the lowest index
iota.getNewAddress(seed, { index: index, securityLevel: securityLevel, total: 2 })
  .then(address => {
    console.log('Your addresses are: ' + address);
  })
  .catch(err => {
    console.log(err)
  });