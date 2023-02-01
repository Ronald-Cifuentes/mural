import { FC } from 'react'

const Container: FC<any> = ({ children }) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  return <div style={style}>{children}</div>
}

export default Container
