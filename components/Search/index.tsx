import { FC } from 'react'
import Tags from '../Tags'

const Search: FC = () => {
  const style = {
    padding: 15,
    borderRadius: 20,
    border: '1px solid #ccc',
    outline: 'none',
    width: '50%',
    background: '#dedede',
  }
  return (
    <div>
      <input style={style} type="text" placeholder="Buscar..." />
      <Tags />
    </div>
  )
}

export default Search
