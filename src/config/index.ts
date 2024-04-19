import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrumSepolia, gnosisChiado, morphSepolia, neonDevnet } from "viem/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "CoinCast",
  description: "ERC1155 Launchpad",
  url: "https://coincast.vercel.app",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [arbitrumSepolia, morphSepolia, neonDevnet, gnosisChiado] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
});
