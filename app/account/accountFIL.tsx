'use client';

import { api } from '@/convex/_generated/api';
import { Preloaded, useAction } from 'convex/react';
import { useUser } from '@clerk/clerk-react';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AuthenticatedPreload from '@/components/preloading';
import { FunctionReturnType } from 'convex/server';

import Web3 from 'web3';

export interface Auth {
	accessToken: string;
}

export interface Props {
	onLoggedIn: (auth: Auth) => void;
}

// Enable us to use "window.ethereum".
declare global {
	interface Window {
		ethereum: any;
	}
}

interface State {
	auth?: Auth;
}

let web3: Web3 | undefined; // Will hold the web3 instance

const PreloadedProfileHomePage = ({
  preloadedNotes,
}: {
  preloadedNotes: Preloaded<typeof api.notes.getNotes>;
}) => {
  return (
    <AuthenticatedPreload preload={preloadedNotes}>
      <ProfileHomePage preloaded={undefined} />
    </AuthenticatedPreload>
  );
};

const ProfileHomePage = ({
  preloaded,
}: {
  preloaded: FunctionReturnType<typeof api.notes.getNotes> | undefined;
}) => {

  const { user } = useUser();

  const agzeusabi = `[{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"uint256","name":"ref_precent_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRefPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"ref","type":"address"}],"name":"safeMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"setRefPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;

  const handleMint = async (contractAddress: string) => {

      // Check if MetaMask is installed
      if (!window.ethereum) {
        window.alert('Please install MetaMask first.');
        return;
      }

      if (!web3) {
        try {
          // Request account access if needed
          await window.ethereum.enable();
  
          // We don't know window.web3 version, so we use our own instance of Web3
          // with the injected provider given by MetaMask
          web3 = new Web3(window.ethereum);
        } catch (error) {
          window.alert('You need to allow MetaMask.');
          return;
        }
      }
    
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        window.alert('Please connect to MetaMask first.');
        return;
      }
    
      const networkId = await web3.eth.net.getId();
      const FilecoinMainnetID = 314      ; // Filecoin Mainnet ID
      if (networkId !== FilecoinMainnetID) {
        window.alert('Please connect to the Filecoin network in MetaMask.');
        return;
      }
    
      const account = accounts[0];
      //const contractAddress = '0x3A693667835d8eF488752d712342C8fBa594CfD9';
      const default_ref_address = '0x75224eD2b99A8e09a374bE4aA0fa1641a12323aC';
      const contract = new web3.eth.Contract(JSON.parse(agzeusabi), contractAddress);
    
      // Assume the minting price is 0.001 ETH (you should adjust this according to your contract)
      const value = web3.utils.toWei('0.001', 'ether');
    
      try {
        await contract.methods.safeMint(default_ref_address).send({ from: account, value: value });
        window.alert('Mint successful!');
      } catch (error) {
        console.error('Mint failed:', error);
        const errorMessage = (error as Error).message || 'Unknown error';
        window.alert('Minting failed: ' + errorMessage);
      }
    };

    function formatWallet(walletAddress: string) {
      if (!walletAddress || walletAddress.length < 14) {
        return walletAddress; // 如果地址长度不足，直接返回原始地址
      }
      // 截取前6个字符和后8个字符，并用两个点连接
      return `${walletAddress.substring(0, 6)} ... ${walletAddress.substring(walletAddress.length - 4)}`;
    }
    
  
  return (
    <div suppressHydrationWarning={true} className="mt-5 min-h-[100vh] w-full">
      <div className="mx-auto w-4/5 py-[23px] md:py-4 lg:py-[25px] flex justify-between items-center">
      <h2 className="text-right text-xl text-dark md:text-2xl">
          Points: {1000}
        </h2>
        <h1 className="text-left text-2xl font-medium text-dark md:text-3xl">
          Address {formatWallet(user?.primaryWeb3Wallet?.web3Wallet!)}
        </h1>
      </div>

      {/* Divider */}
      <hr className="mx-auto w-4/5 bg-gray-300" style={{ height: '1px' }} />
      
      <div className="mx-auto w-4/5 mb-10 mt-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Manually creating each card */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Zeus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Zeus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 FIL</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x3A693667835d8eF488752d712342C8fBa594CfD9')}
          >
            Mint
          </button>
        </div>

        {/* Repeat the block manually for each item from #2 to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hera.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hera Magic Brush </p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 FIL</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x47744D5aB77E7F9F9206214944A13139484BAd1b')}
          >
            Mint
          </button>
        </div>

        {/* Repeat the block manually for each item from #3 to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Poseidon.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Poseidon Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x09B7c0380EcD9343DE07aD364c1956c09144D07f')}
          >
            Mint
          </button>
        </div>
        {/* Repeat the block manually for each item from #4 to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Demeter.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Demeter Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xF855D299FA5160036475F4fD76bF253837C1EBA2')}
          >
            Mint
          </button>
        </div>
        {/* Repeat the block manually for each item from #5 to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Athena.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Athena Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x5a3E9aBBdAC13bcC5706F5E631873D50a0C578d1')}
          >
            Mint
          </button>
        </div>
        {/* Repeat the block manually for each item from #6 to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Apollo.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Apollo Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xEbf97db6D67e935AF29F3634d1A4EC6363DDC542')}
          >
            Mint
          </button>
        </div>
        {/* Repeat the block manually for each item from #7  to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Artemis.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Artemis Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xC37ACc45Fa214b32bE9672259841D99Af78Ef798')}
          >
            Mint
          </button>
        </div>
        {/* Repeat the block manually for each item from #8  to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Ares.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Ares Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xEDbA53644b45c64cACd7d85474B13Bc4660b7b6f')}
          >
            Mint
          </button>
        </div>
           {/* Repeat the block manually for each item from #9  to #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Achilles.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Achilles Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x0584eD38ae14d5e99B43CCcC3F30f1c8c6cB13Ab')}
          >
            Mint
          </button>
        </div>
           {/* Repeat the block manually for each item from #10 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Aphrodite.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Aphrodite Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x01D0Acab311919428B288360dF97396Ac31088dd')}
          >
            Mint
          </button>
        </div>
            {/* Repeat the block manually for each item from #11 to #20 */}
         <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Dionysus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Dionysus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xCc2ee87A7f10d76aB4dbF0E2b19d056df7ba0057')}
          >
            Mint
          </button>
        </div>
            {/* Repeat the block manually for each item from #12 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hades.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hades Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x3d500f4d7c9a0578bca1f1437a62117e408c57b7')}
          >
            Mint
          </button>
        </div>
            {/* Repeat the block manually for each item from #13 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hephaestus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hephaestus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xaE58C2a7CA71A87fcbD7d1b07bC393892464B832')}
          >
            Mint
          </button>
        </div>
            {/* Repeat the block manually for each item from #14 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hercules.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hercules Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x8BdCE8E822d6f5be519962F22a088cc62EED653B')}
          >
            Mint
          </button>
        </div>
            {/* Repeat the block manually for each item from #15 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hermes.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hermes Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x22bE2ABD2061B16EC23Ef77B32c6A889801bC36A')}
          >
            Mint
          </button>
        </div>      
            {/* Repeat the block manually for each item from #16 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Hestia.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Hestia Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x192dc5C70946B89252b12838189c6823d9d69d27')}
          >
            Mint
          </button>
        </div>     
            {/* Repeat the block manually for each item from #17 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Odysseus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Odysseus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0x0eaa8131cb32d1f5595b27293aed52009c9f3818')}
          >
            Mint
          </button>
        </div>   
            {/* Repeat the block manually for each item from #18 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Persephone.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Persephone Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xE1b7E7d9B3f3F3082367F23Bde1e79f0A2809A2C')}
          >
            Mint
          </button>
        </div>   
            {/* Repeat the block manually for each item from #19 to #20 */}
          <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Prometheus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Prometheus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xb89f86eDed878952FB3ec2AE1BDcff01D014C5b2')}
          >
            Mint
          </button>
        </div>   
          {/* Example for the last one, Zstars #20 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <div className="mb-2">
            <Image
              src="/images/brush/Heraclitus.png"
              alt="NFT Example"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mb-2 text-sm text-gray-600">Heraclitus Magic Brush</p>
          <p className="text-lg font-semibold text-gray-900">Price 0.00001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={()=>handleMint('0xCa35841afBb1c344B1Ac5A0e6f5C9892929AD8b6')}
          >
            Mint
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default PreloadedProfileHomePage;
