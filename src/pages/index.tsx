import { useState } from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'


export default function Home() {
  const [fileUrl, setFileUrl] = useState<null | string> (null)
  const client = ipfsHttpClient({ url: "http://127.0.0.1:5001/api/v0" }) // TODO: fix url

  async function uploadImgOnIpfs(e: React.ChangeEvent<HTMLInputElement>) {
    const files = (e.target as HTMLInputElement).files;
    if(files){
      try {
        const added = await client.add(
          files[0],
          {
            progress: (prog) => console.log(`received: ${prog}`)
          }
        )
        const url = `https://ipfs.io/ipfs/${added.path}`
        setFileUrl(url)
      } catch (error) {
        console.log('Error uploading file: ', error)
      }  
    }

    }
    
  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={uploadImgOnIpfs}
        />
        {
          fileUrl && (
            <img className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
    </main>
  )
}