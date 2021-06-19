import React, { FC } from 'react'
import { RepositryItemImage } from './style'

type TImage = {
  src: string
}

const RepositryImage: FC<TImage> = ({ src }) => (
  <RepositryItemImage>
    <img src={src} alt="" width="50px" height="50px" />
  </RepositryItemImage>
)

export default RepositryImage
