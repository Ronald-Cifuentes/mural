import { FC } from 'react'
import { usePosition } from 'use-position'
import GoogleMapReact from 'google-map-react'

// const AnyReactComponent: FC<any> = ({text}) => <div>{text}</div>

const Map: FC = () => {
  const { latitude, longitude } = usePosition(false)
  const defaultProps = {
    center: {
      lat: 4.570868,
      lng: -74.297333,
    },
    zoom: 7,
  }

  if (latitude && longitude) {
    defaultProps.center.lat = latitude
    defaultProps.center.lng = longitude
  }

  const styles = {
    height: '100vh',
    width: '40%',
  }

  return (
    <div style={styles}>
      <GoogleMapReact
        key="AIzaSyBbfvkJefgl8ht8afGLYVIZMV6dxnjH_Sw"
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        {/* <AnyReactComponent text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
