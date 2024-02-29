const {ethers} = require("hardhat")


async function main(){
  const Kitten = await ethers.getContractFactory("Kitten");
  console.log("Deploying contract...");
  const nft = await Kitten.deploy();
  console.log("Deployed contract to " + nft.target)
}

main()
.then(()=>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1)
})