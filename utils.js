import { Web3Storage } from "web3.storage";

export async function getUsername() {}

export async function fetchActiveEvents() {}

export async function fetchInactiveEvents() {}

// inactive as of now
export async function fetchFeaturedEvents() {}

// inactive as of now
export async function checkIfShortlisted() {}

export async function setUsername() {}

export async function createEvent() {}

export async function getTicket() {}

export async function pauseEvent() {}

export async function runEvent() {}

// inactive as of now
export async function uploadShortlist() {}

// --IPFS functions

function getAccessToken() {
    // return process.env.NEXT_PUBLIC_Web3StorageID
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyMjkyQjQ5YzFjN2ExMzhERWQxQzQ3NGNlNmEyNmM1NURFNWQ0REQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUyMzg2MDc1NDEsIm5hbWUiOiJNZXRhRmkifQ.cwyjEIx8vXtTnn8Y3vctroo_rooHV4ww_2xKY-MT0rs";
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
}

export async function uploadToIPFS(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    return cid;
};

// ----