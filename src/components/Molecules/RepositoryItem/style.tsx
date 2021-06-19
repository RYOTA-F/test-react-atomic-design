import styled from 'styled-components'

export const RepositryItemLink = styled.a`
  width: 100%;
  display: flex;
  text-decoration: none;
  color: black;
`

export const RepositryItemContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #000000;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  margin: 0 auto;

  :not(:first-child) {
    margin-top: 8px;
  }
`

export const RepositryItemName = styled.div`
  margin: auto;
  font-size: 18px;
`

export const RepositryItemAge = styled.div`
  margin: auto 16px auto auto;
  font-size: 18px;
`
