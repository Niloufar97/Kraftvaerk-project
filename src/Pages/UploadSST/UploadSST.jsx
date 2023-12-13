import { useState } from 'react'
import Construction from './Construction'

function UploadSST() {
  const [isConstructOpen, setIsConstructOpen] = useState(false)
  const toggleModal = () => {
    setIsConstructOpen(true)
  }
  return (
    
      <div className="upl-btn-container">
        <div className="upload-container">

          <button onClick={toggleModal} className='construct-btn'>Construct from template</button>
          <Construction triggle={isConstructOpen} setTriggle={setIsConstructOpen} />
        </div>
      </div>
    
  )
}

export default UploadSST;
