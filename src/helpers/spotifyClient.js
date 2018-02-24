// @flow

import axios, { type Axios } from 'axios'

type spotifyRecord = {}

type spotifyToken = {
  access_token: string,
  expires_in: number
}

class SpotifyClient {
  _host = 'https://accounts.spotify.com/api/'
  _secret: string
  _clientId: string
  _spotifyToken: spotifyToken
  _axios: Axios

  constructor() {
    const secret = process.env.REACT_APP_SPOTIFY_SECRET
    const clientId = process.env.REACT_APP_SPOTIFY_ID

    if (secret == null || clientId == null) {
      throw new Error('You should specify spotify secret and client id')
    }

    this._secret = secret
    this._clientId = clientId
    this._axios = axios.create({
      baseURL: this._host
    })
  }

  spotifyToken: spotifyToken


  getToken: () => spotifyToken = () => {
    this._axios.post(
      'token',
      { grant_type: this._clientId },
      {
        headers: {
          Authorization: `Basic ${btoa(`${this._clientId}:${this._secret}`)}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    .then(
      (response) => console.log(response),
      (err) => console.log(`error: ${err}`)
    )
  }

  // findRecord: (name: string) => SpotifyRecord = (name) => {

  // }
}

export default SpotifyClient
