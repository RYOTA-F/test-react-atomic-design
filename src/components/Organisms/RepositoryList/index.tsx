import React, { FC } from 'react'
import { ListContainer } from './style'
import RepositryItem from '../../Molecules/RepositoryItem'
import { TData, TItem } from '../../../types/github'

const RepositoryList: FC<TData> = ({ data }) => (
  <ListContainer>
    {data.map((v: TItem) => (
      <RepositryItem
        src={v.src}
        name={v.name}
        star={v.star}
        url={v.url}
        key={v.name}
      />
    ))}
  </ListContainer>
)

export default RepositoryList
