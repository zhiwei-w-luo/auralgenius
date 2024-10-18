'use client';

import { api } from '@/convex/_generated/api';
import { Preloaded, useAction } from 'convex/react';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import Link from 'next/link';
import React,{ useState ,useEffect} from 'react';
import AuthenticatedPreload from '@/components/preloading';
import { FunctionReturnType } from 'convex/server';
import Select from 'react-select';
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

  const handleMint = async (contractAddress: string,mainnetID:number) => {

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
      const ScrollMainnetID = 534352      ; // Scroll Mainnet ID
      if (networkId !== mainnetID) {
        
        window.alert('Please connect to the corresponding network from MetaMask.');
        // window.alert('Please connect to the Scroll network in MetaMask.');
        return;
      }
    
      const account = accounts[0];
      const default_ref_address = '0x75224eD2b99A8e09a374bE4aA0fa1641a12323aC';
      const contract = new web3.eth.Contract(JSON.parse(agzeusabi), contractAddress);
    
      // Assume the minting price is 0.00001 ETH (you should adjust this according to your contract)
      const value = web3.utils.toWei('0.00001', 'ether');
    
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
    
const nftETHSOP = [
  { name: "Zeus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Zeus.png", address: "0x3A693667835d8eF488752d712342C8fBa594CfD9",mainnetID:10},
  { name: "Hera Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hera.png", address: "0x6fbb81753c356c011134B585B660C1b3F3840682" ,mainnetID:10},
  { name: "Poseidon Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Poseidon.png", address: "0x7b9c3DC67b05E8Da4e288362515E09C7ff81F777" ,mainnetID:10},
  { name: "Demeter Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Demeter.png", address: "0xCa35841afBb1c344B1Ac5A0e6f5C9892929AD8b6" ,mainnetID:10},
  { name: "Athena Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Athena.png", address: "0x01D0Acab311919428B288360dF97396Ac31088dd" ,mainnetID:10},
  { name: "Apollo Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Apollo.png", address: "0xCc2ee87A7f10d76aB4dbF0E2b19d056df7ba0057" ,mainnetID:10},
  { name: "Artemis Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Artemis.png", address: "0xF855D299FA5160036475F4fD76bF253837C1EBA2" ,mainnetID:10},
  { name: "Ares Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Ares.png", address: "0x3D500F4D7C9a0578bCa1f1437a62117E408C57B7" ,mainnetID:10},
  { name: "Achilles Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Achilles.png", address: "0x01D0Acab311919428B288360dF97396Ac31088dd",mainnetID:10 },
  { name: "Aphrodite Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Aphrodite.png", address: "0xEDbA53644b45c64cACd7d85474B13Bc4660b7b6f" ,mainnetID:10},
  { name: "Dionysus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Dionysus.png", address: "0x8BdCE8E822d6f5be519962F22a088cc62EED653B" ,mainnetID:10},
  { name: "Hades Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hades.png", address: "0x22bE2ABD2061B16EC23Ef77B32c6A889801bC36A" ,mainnetID:10},
  { name: "Hephaestus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hephaestus.png", address: "0x192dc5C70946B89252b12838189c6823d9d69d27" ,mainnetID:10},
  { name: "Hercules Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hercules.png", address: "0xE1b7E7d9B3f3F3082367F23Bde1e79f0A2809A2C" ,mainnetID:10},
  { name: "Hermes Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hermes.png", address: "0x87e52c4F35760f753F77ED7E0CF2c3fd4FD93b46" ,mainnetID:10},
  { name: "Hestia Magic Brush", price:"Price 0.00001 ETH",imgSrc: "/images/brush/Hestia.png", address: "0xaE58C2a7CA71A87fcbD7d1b07bC393892464B832" ,mainnetID:10},
  { name: "Odysseus Magic Brush",price:"Price 0.00001 ETh", imgSrc: "/images/brush/Odysseus.png", address: "0x09B7c0380EcD9343DE07aD364c1956c09144D07f" ,mainnetID:10},
  { name: "Persephone Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Persephone.png", address: "0xb89f86eDed878952FB3ec2AE1BDcff01D014C5b2",mainnetID:10 },
  { name: "Prometheus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Prometheus.png", address: "0x406E2Cc89499596b25e1c9B92594EFB395907017",mainnetID:10},
  { name: "Heraclitus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Heraclitus.png", address: "0x0EAA8131cB32d1f5595b27293AEd52009c9F3818" ,mainnetID:10}
];

const nftETHSSC = [
  { name: "Zeus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Zeus.png", address: "0x255a5DD65deA76DD72B779C015fac67f0443C5b8",mainnetID:534352},
  { name: "Hera Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hera.png", address: "0x246A16240fcbd35AaF45C3eF111917E4A9161d09" ,mainnetID:534352},
  { name: "Poseidon Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Poseidon.png", address: "0x5a3E9aBBdAC13bcC5706F5E631873D50a0C578d1" ,mainnetID:534352},
  { name: "Demeter Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Demeter.png", address: "0xCa35841afBb1c344B1Ac5A0e6f5C9892929AD8b6" ,mainnetID:534352},
  { name: "Athena Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Athena.png", address: "0x3ea5c053F1A3C276d8A1685Ab8b7aF74573Fc4D9" ,mainnetID:534352},
  { name: "Apollo Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Apollo.png", address: "0xCc2ee87A7f10d76aB4dbF0E2b19d056df7ba0057" ,mainnetID:534352},
  { name: "Artemis Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Artemis.png", address: "0xF855D299FA5160036475F4fD76bF253837C1EBA2" ,mainnetID:534352},
  { name: "Ares Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Ares.png", address: "0x3D500F4D7C9a0578bCa1f1437a62117E408C57B7" ,mainnetID:534352},
  { name: "Achilles Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Achilles.png", address: "0x01D0Acab311919428B288360dF97396Ac31088dd",mainnetID:534352 },
  { name: "Aphrodite Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Aphrodite.png", address: "0xEDbA53644b45c64cACd7d85474B13Bc4660b7b6f" ,mainnetID:534352},
  { name: "Dionysus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Dionysus.png", address: "0x8BdCE8E822d6f5be519962F22a088cc62EED653B" ,mainnetID:534352},
  { name: "Hades Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hades.png", address: "0x22bE2ABD2061B16EC23Ef77B32c6A889801bC36A" ,mainnetID:534352},
  { name: "Hephaestus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hephaestus.png", address: "0xf3bf9c681CEBB9Fe47D2D218A0D937ae273af47e" ,mainnetID:534352},
  { name: "Hercules Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hercules.png", address: "0xE1b7E7d9B3f3F3082367F23Bde1e79f0A2809A2C" ,mainnetID:534352},
  { name: "Hermes Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Hermes.png", address: "0xaE58C2a7CA71A87fcbD7d1b07bC393892464B832" ,mainnetID:534352},
  { name: "Hestia Magic Brush", price:"Price 0.00001 ETH",imgSrc: "/images/brush/Hestia.png", address: "0x09B7c0380EcD9343DE07aD364c1956c09144D07f" ,mainnetID:534352},
  { name: "Odysseus Magic Brush",price:"Price 0.00001 ETh", imgSrc: "/images/brush/Odysseus.png", address: "0xb89f86eDed878952FB3ec2AE1BDcff01D014C5b2" ,mainnetID:534352},
  { name: "Persephone Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Persephone.png", address: "0xEa08B541442F3FdFE95f47858246af846c1653d3",mainnetID:534352 },
  { name: "Prometheus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Prometheus.png", address: "0xA7ADb2eA222e5e89Ba70AaDcE13fFED3DEA2206C",mainnetID:534352},
  { name: "Heraclitus Magic Brush",price:"Price 0.00001 ETH", imgSrc: "/images/brush/Heraclitus.png", address: "0x192dc5C70946B89252b12838189c6823d9d69d27" ,mainnetID:534352}
];

const nftFILS = [
  { name: 'Zeus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Zeus.png', address: '0x3A693667835d8eF488752d712342C8fBa594CfD9',mainnetID:314 },
  { name: 'Hera Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hera.png', address: '0x47744D5aB77E7F9F9206214944A13139484BAd1b',mainnetID:314  },
  { name: 'Poseidon Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Poseidon.png', address: '0x09B7c0380EcD9343DE07aD364c1956c09144D07f' ,mainnetID:314 },
  {name: 'Demeter Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Demeter.png', address: '0xF855D299FA5160036475F4fD76bF253837C1EBA2' ,mainnetID:314 },
  {name: 'Athena Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Athena.png', address: '0x5a3E9aBBdAC13bcC5706F5E631873D50a0C578d1' ,mainnetID:314 },
  { name: 'Apollo Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Apollo.png', address: '0xEbf97db6D67e935AF29F3634d1A4EC6363DDC542' ,mainnetID:314 },
  { name: 'Artemis Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Artemis.png', address: '0xC37ACc45Fa214b32bE9672259841D99Af78Ef798' ,mainnetID:314 },
  {name: 'Ares Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Ares.png', address: '0xEDbA53644b45c64cACd7d85474B13Bc4660b7b6f' ,mainnetID:314 },
  { name: 'Achilles Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Achilles.png', address: '0x0584eD38ae14d5e99B43CCcC3F30f1c8c6cB13Ab',mainnetID:314  },
  {name: 'Aphrodite Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Aphrodite.png', address: '0x01D0Acab311919428B288360dF97396Ac31088dd',mainnetID:314 },
  { name: 'Dionysus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Dionysus.png', address: '0xCc2ee87A7f10d76aB4dbF0E2b19d056df7ba0057' ,mainnetID:314 },
  {name: 'Hades Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hades.png', address: '0x3d500f4d7c9a0578bca1f1437a62117e408c57b7',mainnetID:314  },
  { name: 'Hephaestus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hephaestus.png', address: '0xaE58C2a7CA71A87fcbD7d1b07bC393892464B832' ,mainnetID:314 },
  { name: 'Hercules Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hercules.png', address: '0x8BdCE8E822d6f5be519962F22a088cc62EED653B' ,mainnetID:314 },
  { name: 'Hermes Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hermes.png', address: '0x22bE2ABD2061B16EC23Ef77B32c6A889801bC36A' ,mainnetID:314 },
  { name: 'Hestia Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Hestia.png', address: '0x192dc5C70946B89252b12838189c6823d9d69d27',mainnetID:314  },
  {name: 'Odysseus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Odysseus.png', address: '0x0eaa8131cb32d1f5595b27293aed52009c9f3818' ,mainnetID:314 },
  { name: 'Persephone Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Persephone.png', address: '0xE1b7E7d9B3f3F3082367F23Bde1e79f0A2809A2C',mainnetID:314  },
  { name: 'Prometheus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Prometheus.png', address: '0xb89f86eDed878952FB3ec2AE1BDcff01D014C5b2' ,mainnetID:314 },
  { name: 'Heraclitus Magic Brush', price: 'Price 0.00001 FIL', imgSrc: '/images/brush/Heraclitus.png', address: '0xCa35841afBb1c344B1Ac5A0e6f5C9892929AD8b6' ,mainnetID:314 }
];
  
 // 定义一个状态存储当前选择的数据源
 const [selectedSource, setSelectedSource] = useState('nftETHS');
 const [data, setData] = useState([{name:"",price:"",imgSrc:"",address:"",mainnetID:0}]);

 // 当selectedSource改变时，更新数据
 useEffect(() => {
     if (selectedSource === 'nftETHSSC') {
         setData(nftETHSSC);
     } else if (selectedSource === 'nftFILS') {
         setData(nftFILS);
     } else if (selectedSource === 'nftETHSOP') {
      setData(nftETHSOP);
  }
 }, [selectedSource]);


const options = [
  {
    value: 'nftETHSSC',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/icons/scroll.svg" alt="Scroll" width={20} height={20} />
        <span style={{ marginLeft: 8 }}>Scroll</span>
      </div>
    ),
  },
  {
    value: 'nftFILS',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/icons/filecoin.svg" alt="Filecoin" width={20} height={20} />
        <span style={{ marginLeft: 8 }}>Filecoin</span>
      </div>
    ),
  },
  {
    value: 'nftETHSOP',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/icons/Optimism.svg" alt="Filecoin" width={20} height={20} />
        <span style={{ marginLeft: 8 }}>Optimism</span>
      </div>
    ),
  },
];

  const [selectedOption, setSelectedOption] = useState(options[0]); // 设置默认选项为第一个

  const handleChange = (selectedOption: any) => {
    setSelectedSource(selectedOption.value);
    setSelectedOption(selectedOption)
  };

  return (
    <div suppressHydrationWarning={true} className="mt-5 min-h-[100vh] w-full">
      <div className="mx-auto w-4/5 py-[23px] md:py-4 lg:py-[25px] flex justify-between items-center">
      <h2 className="text-right text-xl text-dark md:text-2xl">
          Points: {1000}
        </h2>
        <Select
        
         value={selectedOption} // 控制当前选中的值
          options={options}
          onChange={handleChange}
          styles={{
            option: (provided) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
            }),
          }}
        />
       {formatWallet(user?.primaryWeb3Wallet?.web3Wallet!)}
      </div>

      {/* Divider */}
      <hr className="mx-auto w-4/5 bg-gray-300" style={{ height: '1px' }} />
      
      <div className="mx-auto w-4/5 mb-10 mt-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* 响应式网格布局 */}
 

        {data.map((nft, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-lg border border-gray-300 shadow-md p-4">
              <div className="mb-2">
                <Image
                  src={nft.imgSrc}
                  alt={`${nft.name} Example`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <p className="mb-2 text-sm text-gray-600">{nft.name}</p>
              <p className="text-lg font-semibold text-gray-900">{nft.price}</p>
              <button
                className="mt-2 rounded bg-dark text-white px-4 py-2 text-sm uppercase shadow-sm hover:bg-dark-hover"
                onClick={() => handleMint(nft.address,nft.mainnetID)}
              >
                Mint
              </button>
            </div>
          ))}

      </div>
    </div>
    </div>
  );
};

export default PreloadedProfileHomePage;
