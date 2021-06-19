import React, { FC } from 'react'
import {
  RepositryItemLink,
  RepositryItemContainer,
  RepositryItemName,
  RepositryItemAge,
} from './style'
import RepositryImage from '../../Atoms/Image'
import { TItem } from '../../../types/github'

const RepositryItem: FC<TItem> = ({ src, name, star, url }) => (
  <RepositryItemContainer>
    <RepositryItemLink href={url} target="_blank">
      <RepositryImage src={src} />
      <RepositryItemName>{name}</RepositryItemName>
      <RepositryItemAge>Star: {star}</RepositryItemAge>
    </RepositryItemLink>
  </RepositryItemContainer>
)

export default RepositryItem
