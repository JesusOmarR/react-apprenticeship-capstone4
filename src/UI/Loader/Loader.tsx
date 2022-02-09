import React from 'react'
import { LoaderContainer } from './Loader.styled'
const Loader = () => {
  return (
    <LoaderContainer>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  )
}
export default Loader
