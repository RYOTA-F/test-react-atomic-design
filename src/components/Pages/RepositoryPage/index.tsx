import React, { FC, useState } from 'react'
import axios from 'axios'
import { Container } from './style'
import RepositorySearch from '../../Molecules/RepositorySearch'
import RepositoryLayout from '../../Template/RepositoryLayout'
import NoData from '../../Molecules/NoData'

const Github: FC = () => {
  const [data, setData] = useState([])
  const [keyword, setKeyword] = useState('')

  const clickSearch = () => {
    const fetchGithub = async () => {
      const params = { q: keyword, sort: 'stars', order: 'desc' }

      const response = await axios.get(
        'https://api.github.com/search/repositories',
        { params }
      )

      const return_data: any = []

      if (response && response.data && response.data.items) {
        response.data.items.forEach((v: any) => {
          return_data.push({
            src: v.owner.avatar_url,
            name: v.name,
            star: v.stargazers_count,
            url: v.html_url,
          })
        })
      }

      setData(return_data)
    }
    fetchGithub()
  }

  let items

  if (data.length) {
    items = <RepositoryLayout data={data} />
  } else {
    items = <NoData />
  }

  return (
    <Container>
      <RepositorySearch
        keyword={keyword}
        setKeyword={setKeyword}
        clickSearch={clickSearch}
      />
      {items}
    </Container>
  )
}

export default Github
