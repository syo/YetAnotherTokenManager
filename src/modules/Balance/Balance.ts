import * as path from 'path';
import * as Web3 from 'web3';
import * as BigNumber from 'bignumber.js';
//import DumbContract from "../../contracts/DumbContract";

const dumbContractAddress = "0x00000000000";
const accountAddress = "0x00000000000";

//const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/vbusFTxfH3rpnHftF0N6"));
/*
  Get the balance in ETH of the given address
*/
function ethBalance(address: string): void {
  console.log('Getting Ethereum address info.....');
  
  // Define the address to search witin.
  //var addr = ('0xe8063467ed6432483B88225abF228AE4155b332b');
  var addr = address;//('0x5Ae2Ee9Eff7B3E1E896Ea09Dc663b01dEdb10f24');
  var wei;
  // Show the address in the console.
  console.log('Address:', addr);
  
  var web3;

  if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No Web3 Detected... using HTTP Provider')
    web3 = new Web3();
    web3.setProvider(new Web3.providers.HttpProvider("https://mainnet.infura.io/vbusFTxfH3rpnHftF0N6"));
  }
  // Use Wb3 to get the balance of the address, convert it and then show it in the console.
  web3.eth.getBalance(addr, function (error, wei) {
    if (!error) {
      console.log('Latest block: ', web3.eth.getBlock("latest").number);
      console.log("wei: ", wei.toString());
      console.log("eth: ", (wei/1000000000000000000).toString());
      document.getElementById("output").innerHTML =  (wei/1000000000000000000).toString() + " ETH";
      //console.log("web3: ", web3);
      //balance = web3.utils.fromWei(wei,'ether');
      //console.log('Ether:', web3.utils.fromWei(balance,'ether')); // Show the ether balance after converting it from Wei
    } else {
      console.log('Some error: ', error); // Should dump errors here
    }
  });

  //console.log("balance in ETH: ", balance);
  //return balance;
  /*const dumbContract = await DumbContract.createAndValidate(web3, dumbContractAddress);
  
  await dumbContract.countupTx({ from: accountAddress });
  console.log("Counter: ", (await dumbContract.counter).toString());
  console.log("counterWithOffset: ", (await dumbContract.counterWithOffset(new (web3 as any).BigNumber(5))).toString());
  */
}

//main().catch(console.error);