import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let myVariable: any;

export const setMyVariable = (value: string | undefined) => {
  myVariable = value;
};

export const getMyVariable = () => {
  return myVariable;
};




export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
  };
  
  export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
  };
  
  export const formatAddress = (addr: string | undefined) => {
    return `${addr?.substring(0, 20)}...`;
  };