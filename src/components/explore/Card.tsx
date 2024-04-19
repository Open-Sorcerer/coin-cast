"use client";
/* eslint-disable @next/next/no-img-element -- To avoid img element warning */
import { networks, type Campaigns } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { parseEther } from "viem";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

let chainLogo = "";

const Card = ({ name, price, image, nftAddress }: Campaigns) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address, chain } = useAccount();
  const { data, writeContract, status, error } = useWriteContract();
  const { isSuccess, status: isValid } = useWaitForTransactionReceipt({
    hash: data,
  });

  const handleMint = async () => {
    setIsLoading(true);
    if (address) {
      writeContract({
        account: address,
        address: nftAddress as `0x${string}`,
        abi: ["NFT_ABI"],
        functionName: "nftMint",
        value: parseEther(price),
      });
    } else {
      setIsLoading(false);
      toast.error("Please connect the wallet", {
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  useEffect(() => {
    console.log(chain?.name);
    chainLogo = networks.find((network) => network.chain === chain?.name)?.logo as string;
  }, [chain?.name]);

  useEffect(() => {
    if (status === "success" && isSuccess && isValid === "success") {
      setIsLoading(false);
      toast.success("Purchase Successful", {
        style: {
          borderRadius: "10px",
        },
      });
    } else if (status === "error") {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
        },
      });
    }
  }, [status, isSuccess, error, isValid]);

  return (
    <div className="flex flex-col w-fit bg-[#141414] dark:bg-blue-700 bg-opacity-10 dark:bg-opacity-10 border border-neutral-300 dark:border-neutral-700 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-fill bg-cyan-400 w-[15rem] h-[15rem] bg-primary rounded-xl"
      />
      <div className="flex flex-row mt-3 justify-between items-center">
        <h2 className="w-[85%] text-xl font-medium truncate">{name}</h2>
        {chainLogo && (
          <Image
            src={chainLogo}
            alt="chain"
            width={30}
            height={30}
            className="object-fill bg-cyan-100 w-6 h-6 bg-primary rounded-full"
          />
        )}
      </div>
      <div className="flex flex-row mt-2 justify-between items-center">
        <p className="text-neutral-700 dark:text-cyan-200 font-normal">{price} ETH</p>
        <span className="flex flex-row gap-2 items-center">
          <Link
            href={""}
            target="_blank"
            className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg"
          >
            <Image src="/logos/farcaster.svg" alt="external-link" width={22} height={22} />
          </Link>
          <button
            onClick={() => {
              handleMint();
            }}
            className="bg-gradient-to-br from-[#ffd84b] from-[20%] to-[#e6b366] hover:from-[#ffd643] hover:from-[20%] hover:to-[#d0a564] text-neutral-800 font-medium items-center rounded-lg px-5 py-1.5 disabled:opacity-70 disabled:cursor-progress"
            disabled={isLoading}
          >
            Mint
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
