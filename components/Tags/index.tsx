const Tags = () => {
  const tags = [
    'Mascotas',
    'Propiedades',
    'Niños',
    'Servicios',
    'Alquiler',
    'Venta',
    'Accesorios',
  ]
  const style = {
    paddingTop: 10,
  }
  const tag = {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ddd7ef',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    textDecoration: 'none',
    color: '#111',
    fontSize: 10,
    boxShadow: '1px 1px 4px -2px',
  }

  return (
    <div style={style}>
      {tags.map((e, i) => (
        <a key={i} href="#" style={tag}>
          {e}
        </a>
      ))}
    </div>
  )
}

export default Tags
