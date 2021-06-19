import React, { FC } from 'react'
import Button from '@material-ui/core/Button'

const AppButton: FC<{ clickSearch: any }> = ({ clickSearch }) => {
  const onClickHandler = () => {
    clickSearch()
  }

  return (
    <Button variant="contained" color="primary" onClick={onClickHandler}>
      検索
    </Button>
  )
}

export default AppButton
