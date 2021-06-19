import React from 'react'
import { BoardRowDiv } from './style'
import Square from '../../Atoms/Square'

interface Props {
  squares: any
  onClick: any
}

class Board extends React.Component<Props> {
  renderSquare(i: number) {
    return (
      <Square
        children={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <BoardRowDiv>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRowDiv>
        <BoardRowDiv>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRowDiv>
        <BoardRowDiv>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRowDiv>
      </div>
    )
  }
}

export default Board
