import list from "@/pages/api/list.json";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";

export default async function handler(req, res) {
  const { wallet } = req.headers;
  if (wallet === undefined || wallet === "" || wallet === null) {
    res.status(400).json({ error: "please input wallet" });
    return;
  }

  try {
    const leaves = list.map((x) => ethers.utils.keccak256(x));
    const merkletree = new MerkleTree(leaves, ethers.utils.keccak256, { sortPairs: true });
    const leaf = ethers.utils.keccak256(wallet);
    const hexProof = merkletree.getHexProof(leaf);
    const hexRoot = merkletree.getHexRoot();

    res.status(200).json({ hexProof, hexRoot });
  } catch (err) {
    res.status(400).json(err);
  }
}
