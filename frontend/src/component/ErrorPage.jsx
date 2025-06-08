import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-section">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="img-err">
              <img src=" images\error.png" alt="" />
            </div>
            <h2 className='display-4 err-msg py-3'>404 Error Page does not found</h2>
            <button className='btn btn-danger' onClick={()=>navigate('/')}>Back Home</button>
          </div>
        </div>
      </div>
    </div>
  )
}
