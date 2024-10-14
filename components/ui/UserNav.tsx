'use client';
import { LogOut, Paintbrush2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import Link from 'next/link';
import { useClerk } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';

export function UserNav({
  image,
  name,
  email,
  wallet,
}: {
  image: string;
  name: string;
  email: string;
  wallet: string;
}) {
  const { signOut } = useClerk();
  const router = useRouter();

  function formatWallet(walletAddress: string) {
    if (!walletAddress || walletAddress.length < 14) {
      return walletAddress; // 如果地址长度不足，直接返回原始地址
    }
    // 截取前6个字符和后8个字符，并用两个点连接
    return `${walletAddress.substring(0, 12)} ... ${walletAddress.substring(walletAddress.length - 12)}`;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>
              <img src={'/images/profile.jpeg'} alt={name} />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-black">
              {name}
            </p>
            <p className="text-xs leading-none text-black">{formatWallet(wallet)}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/dashboard">
          <DropdownMenuItem className="hover:cursor-pointer hover:bg-gray-200">
            <Paintbrush2 className="mr-2 h-4 w-4 text-black" />
            <span className="text-black">Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/account">
        <DropdownMenuItem className="hover:cursor-pointer hover:bg-gray-200">
            <Paintbrush2 className="mr-2 h-4 w-4 text-black" />
            <span className="text-black">My Profile</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => signOut(() => router.push('/'))}
          className="hover:cursor-pointer hover:bg-gray-200"
        >
          <LogOut className="mr-2 h-4 w-4 text-black" />
          <span className="text-black">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
