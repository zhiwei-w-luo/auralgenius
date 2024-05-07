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

  const handleMint = async () => {

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
      const optimismNetworkId = 10; // Optimism Mainnet ID
      if (networkId !== optimismNetworkId) {
        window.alert('Please connect to the Optimism network in MetaMask.');
        return;
      }
    
      const account = accounts[0];
      const contractAddress = '0x3430549b8d1BF99BBe6D0425C6741da34DC11c0d';
      const default_ref_address = '0x75224eD2b99A8e09a374bE4aA0fa1641a12323aC';
      const contract = new web3.eth.Contract(JSON.parse(agzeusabi), contractAddress);
    
      // Assume the minting price is 0.001 ETH (you should adjust this according to your contract)
      const value = web3.utils.toWei('0.001', 'ether');
    
      try {
        await contract.methods.safeMint(default_ref_address).send({ from: account, value: value });
        window.alert('Mint successful!');
      } catch (error) {
        console.error('Mint failed:', error);
        window.alert('Minting failed: ' + error.message);
      }
    };

    function formatWallet(walletAddress) {
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
          <p className="text-lg font-semibold text-gray-900">Price 0.001 ETH</p>
          <button
            className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
            onClick={handleMint}
          >
            Mint
          </button>
        </div>

        {/* Repeat the block manually for each item from #2 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>

        {/* Repeat the block manually for each item from #3 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
        {/* Repeat the block manually for each item from #4 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
        {/* Repeat the block manually for each item from #5 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
        {/* Repeat the block manually for each item from #6 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
        {/* Repeat the block manually for each item from #7 to #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
        {/* Example for the last one, Zstars #8 */}
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
          <p className="text-lg font-semibold text-gray-900">Price * ETH</p>
          <button
              className="mt-2 rounded bg-gray-500 text-white px-4 py-2 text-sm uppercase shadow-sm cursor-not-allowed"
              disabled
            >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PreloadedProfileHomePage;
