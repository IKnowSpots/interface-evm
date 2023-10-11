import { Web3Storage } from "web3.storage";
import { Transaction, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Keypair, sendAndConfirmTransaction, Connection, clusterApiUrl } from "@solana/web3.js";
export async function fetchUsername() {
  // if new user then return this
  return "";
}

export async function fetchActiveEvents() {}

export async function fetchInactiveEvents() {}

// inactive as of now
export async function fetchFeaturedEvents() {}

// inactive as of now
export async function checkIfShortlisted() {}

export async function setUsername(username) {}

// export async function createEvent(publicKey : PublicKey, amount: number) {
//   const connection = new Connection(clusterApiUrl("devnet"));
//   const transaction = new Transaction();
//   const kpid = Keypair.generate();
//   console.log(`Sender is ${publicKey} and the receiver is ${kpid.publicKey}`);
  
//   const sendSolInstruction = SystemProgram.transfer({
//     fromPubkey: publicKey,
//     toPubkey: kpid.publicKey,
//     lamports: LAMPORTS_PER_SOL * amount,
//   });

//   transaction.add(sendSolInstruction);

  

//   const signature = sendAndConfirmTransaction(
//     connection,
//     transaction,
//     [publicKey]
//   )
//   console.log("public key detected", publicKey.toString());
//   console.log("event created");
// }

export async function getTicket() {}

export async function pauseEvent() {
  console.log("event paused");
}

export async function runEvent() {
  console.log("event paused");
}

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
}

// ----
