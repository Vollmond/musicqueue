import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import Link from './Link'

const ALL_ALBUMS_QUERY = gql`
  query AllAlbumsQuery {
    allAlbums {
      id
      name
    }
  }
`

const AlbumsList = ({ allAlbumsQuery: { allAlbums }}) => {
  if(allAlbums) {
    return(<div>{ allAlbums.map(album => <div key={album.id}>{ album.name }</div>) }</div>)
  } else {
    return(<div></div>)
  }
}
export default graphql(ALL_ALBUMS_QUERY, { name: 'allAlbumsQuery' })(AlbumsList)

