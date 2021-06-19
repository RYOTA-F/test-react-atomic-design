import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'

const AppForm: FC<{ keyword: any; setKeyword: any }> = ({
  keyword,
  setKeyword,
}) => {
  const changeKeyword = (e: any) => {
    setKeyword(e.target.value)
  }

  return (
    <TextField
      value={keyword}
      label="検索ワード"
      variant="outlined"
      onChange={changeKeyword}
    />
  )
}

export default AppForm
