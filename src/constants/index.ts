const networks = [
  {
    chain: "Arbitrum Sepolia",
    logo: "/logos/arbitrum.svg",
    contract: "0x6633589236aa3cc786c113a9b24d77cfb2ebf0b1",
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
  {
    chain: "Filecoin Calibration",
    logo: "/logos/filecoin.png",
    contract: "0xA4CCEb9e84b9682ca559AA41DB57f4BECe586dc5",
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
import { launchPadABI, launchPadNFTABI } from "../../contracts/abi";

export { networks, integrations, launchPadABI, launchPadNFTABI, type CampaignData, type Campaigns };
