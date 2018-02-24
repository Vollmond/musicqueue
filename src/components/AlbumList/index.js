// @flow

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Album from './Album'
import AlbumForm from './AlbumForm'
import SpotifyClient from '../../helpers/spotifyClient'

const ALBUMS_QUERY = gql`
  query AllAlbumsQuery {
    allAlbums {
      id
      name
    }
  }
`

type AlbumType = {
  id: number,
  name: string
}

type Props = {
  albumsQuery: {
    loading: boolean,
    allAlbums: Array<AlbumType>,
    error?: string
  }
}

const AlbumsList = (props: Props) => {
  const { albumsQuery } = props
  const spotifyClient = new SpotifyClient()
  spotifyClient.getToken()
  if(albumsQuery.loading === true) {
    return(<div>...loading...</div>)
  } else if(!!albumsQuery.error) {
    return(<div>{ albumsQuery.error }</div>)
  }
  const { allAlbums } = albumsQuery
  return(
    <div>
      <AlbumForm />
      {
        allAlbums.map(album => <Album key={ album.id } name={ album.name } id={ album.id } />)
      }
    </div>
  )
}
export default graphql(ALBUMS_QUERY, { name: 'albumsQuery' })(AlbumsList)

