const networks = [
  {
    chain: "Arbitrum Sepolia",
    logo: "/logos/arbitrum.svg",
  },
  {
    chain: "Gnosis Chiado",
    logo: "/logos/gnosis.png",
  },
  {
    chain: "Neon EVM DevNet",
    logo: "/logos/neon.png",
  },
  {
    chain: "Morph Sepolia",
    logo: "/logos/morph.svg",
  },
];

const integrations = [
  {
    name: "IPFS",
    logo: "/logos/ipfs.png",
  },
  {
    name: "Sign",
    logo: "/logos/sign.png",
  },
];

import { CampaignData, Campaigns } from "./types";

export { networks, integrations, type CampaignData, type Campaigns };
