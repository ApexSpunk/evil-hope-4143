import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function Slidere() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/LG-OLED-TV-CLP-Banner-28-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaDc4L2hmZS85OTI3MzMxMzgxMjc4LmpwZ3w0YzkyY2EwMjQ1MDZkODU5NGQyYTJiYTY1OGUzNWEzNGJiNjc2OTc2NzY5NjU0OTU2NzI3MzY3MWZmMzdmOGY0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/TCL-TV-CLP-Banner-25-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNTc0MzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2hmYi85OTI0MzgxMzExMDA2LmpwZ3w4ZDM0MDFlMTc3Nzg5MWQ3NDI2ZWVlMTJhM2ZiZGJhM2MwNzg4ODg5NzAyNDA4MTdmNDRhNWRmYTg3Njk1NzZj"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.reliancedigital.in/medias/FOXSKY-TV-CLP-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4ODExNnxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDRhLzk5Mjk4MzA0MzI3OTguanBnfDYzN2YxNGQ3MjY1MjZlMmU5MTYyNGM4MzI0NThlYzFmMTViNDZiM2NjMGZmNmYyZmZhNWZmZTRmMDAwMTNmMDk"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidere;