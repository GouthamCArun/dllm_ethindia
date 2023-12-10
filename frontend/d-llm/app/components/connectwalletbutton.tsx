import React from 'react'
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import ConfettiExplosion,{ConfettiProps} from 'react-confetti-explosion';
import { formatAddress, setMyVariable } from './utils';
import { connect } from 'http2';

const connectwalletbutton = () => {
    
    const { sdk, connected, connecting, account } = useSDK();
    const connect = async () => {
        try {
            await sdk?.connect();
            console.log(account);


        } catch (err) {
            console.warn(`No accounts found`, err);
        }
    };
    setMyVariable(account);
    const largeProps: ConfettiProps = {
        force: 0.8,
        duration: 3000,
        particleCount: 300,
        width: 1600,
        colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
      };
    const disconnect = () => {
        if (sdk) {
            sdk.terminate();
        }
    };
   
    return (
        <div className='relative text-black'>
            {connected ? (
                <div className='flex flex-col justify-center items-center'>
             
                <button>{formatAddress(account)}</button>
                <h1>connected</h1><button
                    onClick={disconnect}
                    className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200 flex justify-center items-center"
                >
                    Disconnect
                </button>
               
                </div>
            ) : (
                <button disabled={connecting} onClick={connect} className='bg-[#220c3c] p-2 hover:bg-blue-900 text-white'>
                    Connect Wallet
                </button>
            )}
        </div>
    )
    
}


export default connectwalletbutton