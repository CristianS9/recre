const { ethers } = require("hardhat")

async function runRemote() {
    const [account] = await ethers.getSigners()

    const contract = await ethers.getContractAt(
        "GateInfo",
        "0x9f41990cab023b34db5b335944DD47fF3A9C461b",
        account
    )

    const res = await contract.writeInfo("0x100000000000ddc4")
    console.log(res)
}

runRemote()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
