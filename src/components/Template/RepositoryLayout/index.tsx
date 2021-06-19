import React, { FC } from 'react'
import { RepositoryLayoutContainer } from './style'
import RepositoryList from '../../Organisms/RepositoryList'
import { TData } from '../../../types/github'

const RepositoryLayout: FC<TData> = ({ data }) => (
  <RepositoryLayoutContainer>
    <RepositoryList data={data} />
  </RepositoryLayoutContainer>
)

export default RepositoryLayout
