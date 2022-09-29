import QRCode from 'qrcode'
import { useState } from 'react'


function App() {

  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () =>{
    QRCode.toDataURL(url,{
      width:800,
      margin: 2,
      color: {
        dark: '#335383ff',
        light: '#000000ff'
      }
    }, (err, url) => {
      if (err) return console.error(err)

      setQrcode(url)
    })
  }

  return (
    <div className="app">
<h2>Qr Gen</h2>

<input type="text" 
placeholder="e.g. https://google.com or any link"
value={url}
onChange={(evt) => setUrl(evt.target.value)} />
<button onClick={GenerateQRCode}>Generate</button>
{qrcode && <>
<img src={qrcode} />
<a href={qrcode} download="qrcode.png">Download</a>
</>}
    </div>
  )
}

export default App
