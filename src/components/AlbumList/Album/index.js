// @flow
import React from 'react'
import './styles.css'

type Props = {
  id: number,
  name: string
}

const Album = (props: Props) => (
  <div className="Album-wrapper">
    <div className="Album-title">{ props.name }</div>
  </div>
)

export default Album
