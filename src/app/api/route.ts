import PinataClient from "@pinata/sdk";

const pinata = new PinataClient({ pinataJWTKey: process.env.PINATA_JWT });

export async function POST(request: Request) {
  const json = await request.json();
  try {
    const options = {
      pinataMetadata: {
        name: "json",
      },
    };
    const response = await pinata.pinJSONToIPFS(json, options);
    const { IpfsHash } = response;

    console.log("IpfsHash", IpfsHash);

    return new Response(
      JSON.stringify({
        hash: IpfsHash,
      }),
      {
        status: 200,
      },
    );
  } catch (e) {
    console.log(e);
    alert("Trouble uploading file");
  }
}
