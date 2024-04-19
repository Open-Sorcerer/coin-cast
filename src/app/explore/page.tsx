"use client";
import { Card, Layout } from "@/components";
import type { CampaignData, Campaigns } from "@/constants";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { useAccount, useReadContract } from "wagmi";

const dummy = [
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
  {
    name: "NFT Membership",
    description: "NFT Membership",
    image: "/logos/metamask.jpeg",
    price: "0.01",
    nftAddress: "0xNFT_ADDRESS",
  },
];

const Explore: NextPage = () => {
  const [campaigns, setCampaigns] = useState<Campaigns[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { address } = useAccount();
  const { data, isFetched } = useReadContract({
    address: "0xLAUNCHPAD_ADDRESS",
    abi: ["LAUNCHPAD_ABI"],
    functionName: "getNFTsWithMetadataCreatedByCreator",
    args: [address],
  });

  const fetchData = async () => {
    let nfts = [];
    for (let nft of data as CampaignData[]) {
      const response = await fetch(nft.uri);
      const pd = await response.json();
      nfts.push({
        name: pd.name,
        description: pd.description,
        image: pd.image,
        price: formatEther(BigInt(nft.nftPrice)),
        nftAddress: nft.nftAddress,
      });
    }
    setCampaigns(nfts);
    setIsLoading(false);
  };

  useEffect(() => {
    if (data && isFetched) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetched]);

  return (
    <Layout>
      <div className="flex flex-col w-full px-10 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-neutral-800 dark:text-gray-200 font-primary font-medium">
            Explore campaigns 🛰️
          </h1>
        </div>
        {!isLoading ? (
          <div className="flex flex-col mt-5 w-fit bg-[#141414] bg-opacity-20 dark:bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6">
            <div className="animate-pulse flex flex-col space-x-4">
              <div className="rounded-xl bg-sky-400/40 h-48 w-[12rem]"></div>
              <div className="block h-4 mt-5 items-start bg-gray-600 rounded w-3/4"></div>
              <div className="flex flex-row justify-between mt-2">
                <div className="h-6 w-16 bg-gray-600/80 rounded"></div>
                <div className="h-8 w-20 bg-amber-400/50 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-8">
            {dummy.length === 0 ? (
              <p className="text-secondary text-lg">No active NFT memberships yet.</p>
            ) : (
              dummy.map((data, index) => (
                <Card
                  key={index}
                  name={data.name}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  nftAddress={data.nftAddress}
                />
              ))
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Explore;
