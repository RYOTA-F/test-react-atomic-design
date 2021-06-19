import React, { FC } from 'react'
import { RepositorySearchContainer } from './style'
import AppButton from '../../Atoms/AppButton'
import AppForm from '../../Atoms/AppForm'

const RepositrySearch: FC<{
  keyword: any
  setKeyword: any
  clickSearch: any
}> = ({ keyword, setKeyword, clickSearch }) => {
  return (
    <RepositorySearchContainer>
      <AppForm keyword={keyword} setKeyword={setKeyword} />
      <AppButton clickSearch={clickSearch} />
    </RepositorySearchContainer>
  )
}

export default RepositrySearch
