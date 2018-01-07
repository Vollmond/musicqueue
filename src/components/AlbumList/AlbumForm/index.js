// @flow

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { MutationFunc } from 'react-apollo/types'

const CREATE_QUERY = gql(`
  mutation createAlbumMutation($name: String!) {
    createAlbum(name: $name) {
      id,
      name
    }
  }
`)

type Props = {
  createAlbumMutation: MutationFunc
}

type State = {
  name: string
}

class AlbumForm extends React.Component<Props, State> {
  state = {
    name: ''
  }

  _setName = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  _createAlbum = async () => {
    const { name } = this.state
    await this.props.createAlbumMutation({
      variables: {
        name
      }
    })
  }

  render() {
    return(
      <div>
        <div><input value={ this.state.name } onChange= { this._setName } /></div>
        <div>
          <button onClick={ this._createAlbum } >Добавить</button>
        </div>
      </div>
    )
  }
}

export default graphql(CREATE_QUERY, { name: 'createAlbumMutation' })(AlbumForm)
