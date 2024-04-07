"use client";
import web3modal from "web3modal";
import { ethers } from "ethers";
import {
    addressFactory,
    abiFactory,
    abiIKS,
    abiFeatured,
    RPCUrl,
} from "./config";
import axios from "axios";
// import { Web3Storage } from "web3.storage";
import { create } from '@web3-storage/w3up-client'

// import {
//     PolygonAddressFactory,
//     PolygonCurrency,
//     PolygonInfuraUrl,
//     SepoliaAddressFactory,
//     SepoliaCurrency,
//     SepoliaInfuraUrl
// } from "./config";

// export const InfuraRPCKey = `eec39d04a1064883bf94ec917264ce9a`;
// let addressFactory = PolygonAddressFactory;
// let currency = PolygonCurrency;
// let RPCUrl = `${PolygonInfuraUrl}${InfuraRPCKey}`;

// let chain = `polygon`;

// if (chain == `polygon`) {

// } else if (chain == `Sepolia`) {

// }

let allEvents = [];
let allEventsInfura = [];
let allRewards = [];

// --contract-instance functions

export async function getUserAddress() {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    return accounts[0];
}

export async function getIKSContractAddress(username) {
    const contract = await getFactoryContract();
    const address = await fetchAddressFromUsername(username.toString());
    const id = await contract.hostAddressToContractId(address.toString());
    const contractAddress = await contract.contracts(id);
    return contractAddress;
}

export async function getFeaturedContractAddress() {
    const contract = await getFactoryContract();
    const address = await contract.featuredEventsInstanceAddress();
    return address;
}

export async function getFactoryContract(providerOrSigner) {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const contract = new ethers.Contract(addressFactory, abiFactory, provider);
    if (providerOrSigner == true) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            addressFactory,
            abiFactory,
            signer
        );
        return contract;
    }
    return contract;
}

export async function getIKSContract(username, providerOrSigner) {
    const contractAddress = await getIKSContractAddress(username);
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const contract = new ethers.Contract(contractAddress, abiIKS, provider);
    if (providerOrSigner == true) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abiIKS, signer);
        return contract;
    }
    return contract;
}

export async function getFeaturedContract(providerOrSigner) {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const addressFeatured = await getFeaturedContractAddress();
    const contract = new ethers.Contract(
        addressFeatured,
        abiFeatured,
        provider
    );
    if (providerOrSigner == true) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            addressFeatured,
            abiFeatured,
            signer
        );
        return contract;
    }
    return contract;
}

export async function getFactoryContractWithInfura() {
    const provider = new ethers.providers.JsonRpcProvider(`${RPCUrl}`);
    const factoryContract = new ethers.Contract(
        addressFactory,
        abiFactory,
        provider
    );
    return factoryContract;
}

export async function getIKSContractWithInfura(username) {
    const provider = new ethers.providers.JsonRpcProvider(`${RPCUrl}`);
    const factoryContract = await getFactoryContractWithInfura();
    const hostAddress = await factoryContract.usernameToAddress(username);

    const id = await factoryContract.hostAddressToContractId(hostAddress);
    const addressEventify = await factoryContract.contracts(id);

    const eventifyContract = new ethers.Contract(
        addressEventify,
        abiIKS,
        provider
    );
    return eventifyContract;
}

// --contract-fetching-hostData functions

export async function fetchIfDeployed() {
    const contract = await getFactoryContract();
    const address = await getUserAddress();
    const data = await contract.hasDeployed(address.toString());
    return data;
}

export async function fetchCurrentUsername() {
    const contract = await getFactoryContract();
    const address = await getUserAddress();
    const check = await fetchIfDeployed();
    if (check == true) {
        const data = await contract.addressToUsername(address.toString());
        return data;
    }
}

export async function fetchAddressFromUsername(username) {
    const contract = await getFactoryContract();
    const data = await contract.usernameToAddress(username.toString());
    return data;
}

export async function fetchUsernameFromAddress(address) {
    const contract = await getFactoryContract();
    const data = await contract.addressToUsername(address.toString());
    return data;
}

export async function fetchUsernameValidity(username) {
    const contract = await getFactoryContract();
    const data = await contract.usernameExist(username);
    return data;
}

export async function fetchUsernameValidityInfura(username) {
    const contract = await getFactoryContractWithInfura();
    const data = await contract.usernameExist(username);
    return data;
}

// --contract-fetching-userData functions

export async function fetchIfWhitelistEvents(address) {
    const contract = await getFactoryContract();
    const data = await contract.isWhitelisted(address);
    return data;
}

export async function fetchIfWhitelistRewards(rewardId, username) {
    const contract = await getIKSContract(username, true);
    const userAddress = await fetchAddressFromUsername(username)
    const data = await contract.checkIfWhitelistedReward(rewardId, userAddress);
    return data;
}

export async function fetchFeaturedRequest() {
    const contract = await getFactoryContract();
    const data = await contract.fetchAllFeaturedRequest();
    const items = await Promise.all(
        data.map(async (i) => {
            let item = {
                host: i.host.toString(),
                tokenId: i.ticketId.toString(),
                isApproved: i.isApproved.toString(),
            };
            return item;
        })
    );
    console.log("Featured Request", items);
    return items;
}

// --contract-fetching-tickets functions

export async function fetchAllEvents() {
    console.log("1")
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username);

    console.log("2")

    const data = await contract.fetchAllEvents();

    console.log("3")

    // console.log("data", data)
    const items = await Promise.all(
        data.map(async (i) => {
            const tokenUri = await contract.uri(i.ticketId.toString());
            // console.log(tokenUri);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price);
            let item = {
                name: meta.data.name,
                venue: meta.data.venue,
                date: meta.data.date,
                description: meta.data.description,
                cover: meta.data.cover,
                NftURI: tokenUri,
                host: i.host.toString(),
                supply: i.supply.toNumber(),
                remaining: i.remaining.toNumber(),
                price,
                owner: i.owner.toString(),
                tokenId: i.ticketId.toString(),
                isActive: i.isActive,
                isPublished: i.isPublished,
                isShortlist: i.isShortlist,
                isExistingTicket: i.isExistingTicket,
                isStaking: i.isStaking,
            };
            return item;
        })
    );

    console.log("4")

    allEvents = items;
    console.log("All Events", items);
    return items;
}

export async function fetchAllEventsWithUsername(username) {
    const contract = await getIKSContractWithInfura(username);

    const data = await contract.fetchAllEvents();
    const items = await Promise.all(
        data.map(async (i) => {
            const tokenUri = await contract.uri(i.ticketId.toString());
            // console.log(tokenUri);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price);
            let item = {
                name: meta.data.name,
                venue: meta.data.venue,
                date: meta.data.date,
                description: meta.data.description,
                cover: meta.data.cover,
                NftURI: tokenUri,
                host: i.host.toString(),
                supply: i.supply.toNumber(),
                remaining: i.remaining.toNumber(),
                price,
                owner: i.owner.toString(),
                tokenId: i.ticketId.toString(),
                isActive: i.isActive,
                isPublished: i.isPublished,
                isShortlist: i.isShortlist,
                isExistingTicket: i.isExistingTicket,
                isStaking: i.isStaking,
            };
            return item;
        })
    );
    allEventsInfura = items;
    console.log("all infura", items);
    return items;
}

export async function fetchMintedCollection() {
    if (allEvents.length > 0) {
        const filteredArray = allEvents.filter(
            (subarray) =>
                subarray.isPublished == false &&
                subarray.isExistingTicket == false
        );
        return filteredArray;
    } else {
        const data = await fetchAllEvents();
        const filteredArray = data.filter(
            (subarray) =>
                subarray.isPublished == false &&
                subarray.isExistingTicket == false
        );
        return filteredArray;
    }
}

export async function fetchActiveEvents() {
    console.log("all events", allEvents)
    if (allEvents.length > 0) {
        const filteredArray = allEvents.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true
        );
        return filteredArray;
    } else {
        const data = await fetchAllEvents();
        const filteredArray = data.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true
        );
        return filteredArray;
    }
}

export async function fetchInactiveEvents() {
    if (allEvents.length > 0) {
        const filteredArray = allEvents.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == false &&
                subarray.isPublished == true
        );
        return filteredArray;
    } else {
        const data = await fetchAllEvents();
        const filteredArray = data.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == false &&
                subarray.isPublished == true
        );
        return filteredArray;
    }
}

export async function fetchShortlistEvents() {
    if (allEvents.length > 0) {
        const filteredArray = allEvents.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true &&
                subarray.isExistingTicket == false &&
                subarray.isShortlist == true
        );
        return filteredArray;
    } else {
        const data = await fetchAllEvents();
        const filteredArray = data.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true &&
                subarray.isExistingTicket == false &&
                subarray.isShortlist == true
        );
        return filteredArray;
    }
}

export async function fetchActiveEventsWithUsername(username) {
    // console.log("length", activeEventsInfura.length)
    if (allEventsInfura.length > 0) {
        const filteredArray = allEventsInfura.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true
        );
        console.log("Active Events", filteredArray);
        return filteredArray;
    } else {
        const fetchedAllEvents = await fetchAllEventsWithUsername(username);
        const filteredArray = fetchedAllEvents.filter(
            (subarray) =>
                subarray.remaining > 0 &&
                subarray.isActive == true &&
                subarray.isPublished == true
        );
        allEventsInfura = filteredArray;
        console.log("Active Events", filteredArray);
        return filteredArray;
    }
}

export async function fetchCommonInventory() {
    let purchasesEvents = []

    const factoryContract = await getFactoryContract(true);

    const address = await getUserAddress();

    const hostsAddresses = await factoryContract.userToHostPurchasedArray(
        address
    );
    console.log("hosts addresses", hostsAddresses);

    const filteredHostsAddresses = hostsAddresses.filter(
        (item, index, array) => array.indexOf(item) === index
    );

    await Promise.all(
        filteredHostsAddresses.map(async (j) => {
            const username = await factoryContract.addressToUsername(
                j.toString()
            );
            const eventifyContract = await getIKSContract(username, true);
            const inventory = await eventifyContract.fetchPurchasedTickets();
            console.log("inventory", inventory)
            const subItems = await Promise.all(
                inventory.map(async (i) => {
                    const tokenUri = await eventifyContract.uri(
                        i.ticketId.toString()
                    );
                    // console.log(tokenUri);
                    const meta = await axios.get(tokenUri);
                    let price = ethers.utils.formatEther(i.price);
                    let item = {
                        name: meta.data.name,
                        venue: meta.data.venue,
                        date: meta.data.date,
                        description: meta.data.description,
                        cover: meta.data.cover,
                        NftURI: tokenUri,
                        host: i.host.toString(),
                        supply: i.supply.toNumber(),
                        remaining: i.remaining.toNumber(),
                        price,
                        owner: i.owner.toString(),
                        tokenId: i.ticketId.toString(),
                        isActive: i.isActive,
                        isPublished: i.isPublished,
                        isShortlist: i.isShortlist,
                        isExistingTicket: i.isExistingTicket,
                    };
                    return item;
                })
            );
            purchasesEvents.push(...subItems);
        })
    );
    console.log("Purchased Events", purchasesEvents);
    return purchasesEvents;
}

export async function fetchFeaturedEventsWithInfura() {
    const contract = await getFactoryContractWithInfura();

    const data = await contract.fetchFeaturedEvents();
    const items = await Promise.all(
        data.map(async (i) => {
            const tokenUri = await contract.uriCall(
                i.owner,
                i.ticketId.toString()
            );
            // console.log(tokenUri);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price);
            let item = {
                tokenId: i.ticketId.toString(),
                host: i.host,
                name: meta.data.name,
                venue: meta.data.venue,
                date: meta.data.date,
                supply: i.supply.toNumber(),
                remaining: i.remaining.toNumber(),
                price,
                NftURI: tokenUri,
                cover: meta.data.cover,
            };
            return item;
        })
    );
    console.log("Featured Events", items);
    return items;
}

export async function fetchAllActiveEvents() { }

export async function fetchHostedRewards() {
    const username = await fetchCurrentUsername();
    if (!username) return;
    const contract = await getIKSContract(username);

    const data = await contract.fetchAllRewards();
    // console.log("data", data)
    const items = await Promise.all(
        data.map(async (i) => {
            const tokenUri = await contract.uri(i.rewardId.toString());
            // console.log(tokenUri);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price);
            let item = {
                name: meta.data.name,
                //description: meta.data.description,
                cover: meta.data.cover,
                NftURI: tokenUri,
                rewardId: i.rewardId.toString(),
                host: i.host.toString(),
                supply: i.supply.toNumber(),
                isClaimed: i.isClaimed,
                isCryptoBound: i.isCryptoBound,
                price,
            };
            return item;
        })
    );
    allRewards = items;
    console.log("All Rewards", items);
    return items;
}

export async function fetchRewardsThroughUsername(username) {
    if (!username) return;
    const contract = await getIKSContract(username);

    const data = await contract.fetchAllRewards();
    // console.log("data", data)
    const items = await Promise.all(
        data.map(async (i) => {
            const tokenUri = await contract.uri(i.rewardId.toString());
            // console.log(tokenUri);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price);
            let item = {
                name: meta.data.name,
                //description: meta.data.description,
                cover: meta.data.cover,
                NftURI: tokenUri,
                rewardId: i.rewardId.toString(),
                host: i.host.toString(),
                supply: i.supply.toNumber(),
                isClaimed: i.isClaimed,
                isCryptoBound: i.isCryptoBound,
                price,
            };
            return item;
        })
    );
    allRewards = items;
    console.log("All Rewards", items);
    return items;
}

export async function fetchClaimedRewardsThroughUsername() {
    if (allRewards.length > 0) {
        const filteredArray = allRewards.filter(
            (subarray) => subarray.isClaimed == true
        );
        return filteredArray;
    } else {
        const data = await fetchRewardsThroughUsername();
        const filteredArray = data.filter(
            (subarray) => subarray.isClaimed == true
        );
        return filteredArray;
    }
}

export async function fetchUnclaimedRewardsThroughUsername() {
    if (allRewards.length > 0) {
        const filteredArray = allRewards.filter(
            (subarray) => subarray.isClaimed == false
        );
        return filteredArray;
    } else {
        const data = await fetchRewardsThroughUsername();
        const filteredArray = data.filter(
            (subarray) => subarray.isClaimed == false
        );
        return filteredArray;
    }
}

// --contract-update functions

export async function deploy(username) {
    const usernameValidity = await fetchUsernameValidity(username);
    if (usernameValidity == true) {
        console.log("username already exist");
        return;
    }
    const contract = await getFactoryContract(true);
    console.log(username.toString());
    const tx = await contract.deployIKS(username.toString());
    await tx.wait();
    console.log("Deployed");
}

export async function mint(_price, _supply, _isShortlist, _isStaking, NftURI) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const price = ethers.utils.parseEther(_price);
    const tx = await contract.mintTickets(
        price,
        _supply,
        _isShortlist,
        _isStaking,
        NftURI
    );
    await tx.wait();
    console.log("minted");
    return true;
}

export async function updateShortlist(ticketId, shortlistArray) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.updateShortlist(ticketId, shortlistArray);
    await tx.wait();
    console.log("Shortlist uploaded");
}

export async function publishTickets(ticketId) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.publishTickets(ticketId);
    await tx.wait();
    await fetchAllEvents();
    console.log("Published");
}

export async function pauseEvent(ticketId) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.pauseActiveEvent(ticketId);
    await tx.wait();
    await fetchAllEvents();
    console.log("Paused");
    // return true;
}

export async function runEvent(ticketId) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.runPausedEvent(ticketId);
    await tx.wait();
    await fetchAllEvents();
    console.log("Event Running");
}

export async function raiseFeaturedEvents(ticketId) {
    const contract = await getFactoryContract(true);

    const tx = await contract.raiseFeaturedEvents(ticketId);
    await tx.wait();
    console.log("Featured Request Sent");
}

export async function buyTicket(username, ticketId, price) {
    const contract = await getFactoryContract(true);

    const weiPrice = ethers.utils.parseUnits(price.toString(), "ether");
    const tx = await contract.buy(username, ticketId, {
        value: weiPrice,
        gasLimit: 1000000,
    });
    await tx.wait();
    console.log("Purchased successfully");
}

export async function whitelistUser(address) {
    const contract = await getFactoryContract(true);

    const check = await fetchIfWhitelist(address);
    if (check == true) return;
    const tx = await contract.whitelistUser(address);
    await tx.wait();
    console.log("Whitelisted");
}

export async function approveFeaturedRequest(host, ticketId) {
    const contract = await getFactoryContract(true);

    const data = await contract.approveFeaturedEvents(host, ticketId);
    await data.wait();
    console.log("Approved");
}

export async function mintReward(_supply, _tokenURI, _isCryptoBound, _price) {
    console.log(_supply, _tokenURI, _isCryptoBound, _price);
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);
    const price = ethers.utils.parseEther(_price);

    if (_isCryptoBound == false) {
        const tx = await contract.mintReward(
            _supply,
            _tokenURI,
            _isCryptoBound,
            price
        );
        await tx.wait();
        console.log("Reward minted");
        return true;
    } else {
        // const weiPrice = ethers.utils.parseUnits(_price.toString(), "ether");
        const tx = await contract.mintReward(
            _supply,
            _tokenURI,
            _isCryptoBound,
            price,
            {
                value: price,
                gasLimit: 1000000,
            }
        );
        await tx.wait();
        console.log("Reward minted");
        return true;
    }
}

export async function updateWhitelist(rewardId, user) {
    const username = await fetchCurrentUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.updateWhitelist(rewardId, user);
    await tx.wait();
    console.log("Whitelist updated");
}

export async function claimReward(rewardId, username) {
    // const username = await fetchUsername();
    const contract = await getIKSContract(username, true);

    const tx = await contract.claimReward(rewardId);
    await tx.wait();
    console.log("Reward claimed");
}

export async function isWallet() {
    return false;
}

// --web3-storage-token functions


// const space = await client.createSpace('iks')

async function makeStorageClient() {
    console.log("0")
    const client = await create()
    console.log("1")
    const space = await client.createSpace('iks')
    const myAccount = await client.login('anshsaxena4190@gmail.com')
    console.log(space)
    console.log("2")
    await myAccount.provision(space.did())
    await space.createRecovery(myAccount.did())
    await space.save()
    await client.setCurrentSpace(space.did())
    // await client.setCurrentSpace("z6MkhLHFoz5Bxv4ncpozxK3DWt8z7se76nwDt8sAfNZM1QzN")
    console.log("3")
    return client
}

export const uploadToIPFS = async (files) => {

    const client = await makeStorageClient();
    const directoryCid = await client.uploadDirectory(files)

    // const cid = await client.put(files);
    return directoryCid;
};

export const uploadToPinataIPFS = async (files, metaData) => {
    try {
        console.log(files)
        console.log(metaData)
        const data = new FormData()
        data.set('file', files)

        const uploadData = await fetch('/api/files', {
            method: 'POST',
            body: data
        })
        const metaCID = await uploadData.json()
        console.log("Reached here", metaCID)
        return metaCID.IpfsHash.IpfsHash
    } catch (error) {

    }

}

// function getAccessToken() {
//     // return process.env.NEXT_PUBLIC_Web3StorageID
//     return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyMjkyQjQ5YzFjN2ExMzhERWQxQzQ3NGNlNmEyNmM1NURFNWQ0REQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUyMzg2MDc1NDEsIm5hbWUiOiJNZXRhRmkifQ.cwyjEIx8vXtTnn8Y3vctroo_rooHV4ww_2xKY-MT0rs";
// }

// function makeStorageClient() {
//     return new Web3Storage({ token: getAccessToken() });
// }

// export const uploadToIPFS = async (files) => {
//     const client = makeStorageClient();
//     const cid = await client.put(files);
//     return cid;
// };

// ----

// export async function getQueryContract(providerOrSigner) {
//     const modal = new web3modal();
//     const connection = await modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const contract = new ethers.Contract(queryContract, queryABI, provider);
//     if (providerOrSigner == true) {
//         const signer = provider.getSigner();
//         const contract = new ethers.Contract(
//             queryContract,
//             queryABI,
//             signer
//         );
//         return contract;
//     }
//     return contract;
// }

// export async function buyTicket(username, ticketId, price) {
//     const contract = await getIKSContract(username, true);

//     const weiPrice = ethers.utils.parseUnits(price.toString(), "ether");
//     const tx = await contract.buyTicket(ticketId, {
//         value: weiPrice,
//         gasLimit: 1000000,
//     });
//     await tx.wait();
//     console.log("Purchased successfully");
// }

// export async function fetchActiveEvents() {
//     const username = await fetchUsername();
//     const contract = await getIKSContract(username);

//     let data = []
//     const tokenId = await contract._tokenId();
//     console.log("data", tokenId.toNumber())
//     for(let i=1; i<=tokenId; i++) {
//         const item = await contract.idToTicket(tokenId.toNumber());
//         console.log(i, item)
//         data.push(item)
//     }

//     console.log("data", data)
//     let items = await Promise.all(data.map(async (i) => {
//         console.log("id", i[5].toNumber())
//         const tokenUri = await contract.uri(i[5].toNumber());
//         // console.log(tokenUri);
//         const meta = await axios.get(tokenUri);
//         let price = ethers.utils.formatEther(i.price);
//         let item = {
//             name: meta.data.name,
//             venue: meta.data.venue,
//             date: meta.data.name,
//              host: i.host,
//              supply: i.supply.toNumber(),
//              remaining: i.remaining.toNumber(),
//              price: i.price.toNumber(),
//              owner: i[4],
//              tokenId: i.ticketId.toNumber(),
//              isActive: i[6],
//              isPublished: i[7],
//              isShortlist: i[8],
//              isExistingTicket: i[9],
//             NftURI: tokenUri,
//             // cover: meta.data.cover
//         };
//         return item;
//     })
//     )
//     console.log("items", items)
//     // const items = await Promise.all(
//     //     data.map(async (i) => {
//     //         const tokenUri = await contract.uri(i.ticketId.toString());
//     //         // console.log(tokenUri);
//     //         const meta = await axios.get(tokenUri);
//     //         let price = ethers.utils.formatEther(i.price);
//     //         let item = {
//     //             tokenId: i.ticketId.toString(),
//     //             name: meta.data.name,
//     //             venue: meta.data.venue,
//     //             date: meta.data.name,
//     //             supply: i.supply.toNumber(),
//     //             remaining: i.remaining.toNumber(),
//     //             price,
//     //             NftURI: tokenUri,
//     //             cover: meta.data.cover,
//     //         };
//     //         return item;
//     //     })
//     // );
//     // console.log("Active Events", items);
//     return [];
// }

// export async function fetchInactiveEvents() {
//     const username = await fetchUsername();
//     const contract = await getIKSContract(username);

//     const data = await contract.fetchPausedEvents();
//     const items = await Promise.all(
//         data.map(async (i) => {
//             const tokenUri = await contract.uri(i.ticketId.toString());
//             // console.log(tokenUri);
//             const meta = await axios.get(tokenUri);
//             let price = ethers.utils.formatEther(i.price);
//             let item = {
//                 tokenId: i.ticketId.toString(),
//                 name: meta.data.name,
//                 venue: meta.data.venue,
//                 date: meta.data.name,
//                 supply: i.supply.toNumber(),
//                 remaining: i.remaining.toNumber(),
//                 price,
//                 NftURI: tokenUri,
//                 cover: meta.data.cover,
//             };
//             return item;
//         })
//     );
//     console.log("Inactive Events", items);
//     return items;
// }

// export async function fetchMintedCollection() {
//     const username = await fetchUsername();
//     const contract = await getIKSContract(username, false);

//     const data = await contract.fetchMintedTickets();
//     const items = await Promise.all(
//         data.map(async (i) => {
//             const tokenUri = await contract.uri(i.ticketId.toString());
//             // console.log(tokenUri);
//             const meta = await axios.get(tokenUri);
//             let price = ethers.utils.formatEther(i.price);
//             let item = {
//                 tokenId: i.ticketId.toString(),
//                 name: meta.data.name,
//                 venue: meta.data.venue,
//                 date: meta.data.name,
//                 supply: i.supply.toNumber(),
//                 remaining: i.remaining.toNumber(),
//                 price,
//                 NftURI: tokenUri,
//                 cover: meta.data.cover,
//             };
//             return item;
//         })
//     );
//     console.log("Minted Collections", items);
//     return items;
// }

// export async function fetchShortlistEvents() {
//     const username = await fetchUsername();
//     const contract = await getIKSContract(username);

//     const data = await contract.fetchShortlistEvents();
//     const items = await Promise.all(
//         data.map(async (i) => {
//             const tokenUri = await contract.uri(i.ticketId.toString());
//             // console.log(tokenUri);
//             const meta = await axios.get(tokenUri);
//             let price = ethers.utils.formatEther(i.price);
//             let item = {
//                 tokenId: i.ticketId.toString(),
//                 name: meta.data.name,
//                 venue: meta.data.venue,
//                 date: meta.data.name,
//                 supply: i.supply.toNumber(),
//                 remaining: i.remaining.toNumber(),
//                 price,
//                 NftURI: tokenUri,
//                 // cover: meta.data.cover
//             };
//             return item;
//         })
//     );
//     console.log("Active Events", items);
//     return items;
// }

// console.log("i", i);
// i.map(async (j) => {
// // let j=0;
// console.log("t22", i.length)
// const tokenUri = await contract.uriCall(
//     i[j]?.owner,
//     i[j]?.ticketId.toNumber()
// );
// console.log(tokenUri);
// const meta = await axios.get(tokenUri);
// let price = ethers.utils.formatEther(i[j].price);
// let item = {
//     tokenId: i[j]?.ticketId.toString(),
//     name: meta.data.name,
//     venue: meta.data.venue,
//     date: meta.data.date,
//     supply: i[j]?.supply.toNumber(),
//     remaining: i[j]?.remaining.toNumber(),
//     price,
//     NftURI: tokenUri,
//     cover: meta.data.cover,
// };?
// return item;
// })

// export async function fetchInventory(username) {
//     const contract = await getIKSContract(username, true);

//     const data = await contract.fetchPurchasedTickets();
//     console.log("data", data);
//     const items = await Promise.all(
//         data.map(async (i) => {
//             const tokenUri = await contract.uri(i.ticketId.toString());
//             // console.log(tokenUri);
//             const meta = await axios.get(tokenUri);
//             let price = ethers.utils.formatEther(i.price);
//             let item = {
//                 tokenId: i.ticketId.toString(),
//                 name: meta.data.name,
//                 venue: meta.data.venue,
//                 date: meta.data.name,
//                 supply: i.supply.toNumber(),
//                 remaining: i.remaining.toNumber(),
//                 price,
//                 NftURI: tokenUri,
//                 cover: meta.data.cover,
//             };
//             return item;
//         })
//     );
//     console.log("Inventory", items);
//     return items;
// }

// export async function fetchUsernameFromAddress(address) {
//     const contract = await getFactoryContract();
//     const data = await contract.addressToUsernames(address.toString());
//     return data;
// }
