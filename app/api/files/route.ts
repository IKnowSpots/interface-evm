import { NextResponse, NextRequest } from "next/server";

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File | null = data.get("file") as unknown as File;
        const metaData: Object | null = data.get('metadata') as unknown as Object
        data.append("file", file);

        data.append("pinataMetadata", JSON.stringify({ name: "File to upload" }));
        const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyOGJmOGI3OS00OThiLTRjODctYTIwYy03OGVkZjZmODhkNmEiLCJlbWFpbCI6ImFyeWFuYnJhbWhhbmUxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0OWI5MzhmNGZhMGE1MzBlZWY3YiIsInNjb3BlZEtleVNlY3JldCI6IjAyNTVmZDU0YWE5NGU4NGIzMjBkYThjMzA5YWU3YzE5MTYyYzA2YzQ0YzhhMmI1Y2FhMjAwNDczODhiMDU4MzEiLCJpYXQiOjE3MTI0Njc0Mzd9.EslM8q4NLhRq3XZCm36BoBUAyM4ZcZNRQzJSMDA_Xuw`,
            },
            body: data,
        });
        const IpfsHash = await res.json();
        console.log(IpfsHash);

        return NextResponse.json({ IpfsHash }, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
