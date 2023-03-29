import React from 'react'
import styles from '../style'

const SearchResult = ({ result }) => {
  return (
    <div>
      {
        result?.map((prov, id) => {
          return <div className={`${styles.paragraphList} flex-col shadow-black max-h-300px select-text mt-0`} key={id}>{prov.name}</div>
        })
      }
    </div>
  )
}

export default SearchResult