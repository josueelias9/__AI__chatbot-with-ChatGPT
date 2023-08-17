import Carousel from 'react-bootstrap/Carousel'

function DarkVariantExample() {
  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente para el texto
    padding: '10px' // Espaciado interno para el texto
  }

  const captionHeaderStyle = {
    color: '#fff' // Color del texto para el encabezado (h5)
  }

  const captionTextStyle = {
    color: '#fff' // Color del texto para el párrafo (p)
  }

  const imageStyle = {
    width: '1700px',
    height: '400px',
    objectFit: 'cover' // Aplicar recorte a la imagen
  }
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img style={imageStyle} src='image1.jpg' alt='First slide' />
        <Carousel.Caption style={captionStyle}>
          <h5 style={captionHeaderStyle}>First slide label</h5>
          <p style={captionTextStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imageStyle} src='image2.jpg' alt='Second slide' />
        <Carousel.Caption style={captionStyle}>
          <h5 style={captionHeaderStyle}>Second slide label</h5>
          <p style={captionTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imageStyle} src='image3.jpg' alt='Third slide' />
        <Carousel.Caption style={captionStyle}>
          <h5 style={captionHeaderStyle}>Third slide label</h5>
          <p style={captionTextStyle}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DarkVariantExample
