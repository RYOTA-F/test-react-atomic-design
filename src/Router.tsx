import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Github from './components/Pages/RepositoryPage'
import Game from './components/Pages/Game'

export const Path = {
  github: '/github',
  game: '/game',
}

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={Path.github} component={Github} />
            <Route exact path={Path.game} component={Game} />
            <Redirect to={Path.github} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
