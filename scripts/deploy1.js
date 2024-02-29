const {ethers} = require("hardhat")


async function main(){
  const Dog = await ethers.getContractFactory("Dog");
  console.log("Deploying contract...");
  const nft = await Dog.deploy();
  console.log("Deployed contract to " + nft.target)
}

main()
.then(()=>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1)
})