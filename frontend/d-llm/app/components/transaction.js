const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

// Send Ethereum to an address
sendEthButton.addEventListener('click', () => {
  getAccount();
  ethereum
    .request({
      method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: accounts[0], // The user's active address.
          to: 0x650E422203665382BD36A3cA5e962297924b59e8,// Required except during contract publications.
          value: 1000000000000000, // Only required to send ether to the recipient from the initiating external account.
          gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
});


async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}