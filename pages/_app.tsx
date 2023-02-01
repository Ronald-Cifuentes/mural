import { FC } from 'react'
import '../assets/css/app.css'

const MyApp: FC<any> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
