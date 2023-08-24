import React from 'react'

const AuthButton  = ({ provider }) => {
    return (
      <button className="flex items-center justify-between px-8 py-2  rounded-lg bg-white text-xs">
        <div className="flex ">
          <div>{`Sign in with ${provider}`}</div>
        </div>
        
      </button>
    );
  }

export default AuthButton
