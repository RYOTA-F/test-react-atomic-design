import React from 'react'
import { SquareDiv } from './style'

function Square(props: any) {
  return <SquareDiv onClick={props.onClick}>{props.children}</SquareDiv>
}

export default Square
