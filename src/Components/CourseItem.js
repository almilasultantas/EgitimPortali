import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
function CourseItem({name, image, price, courseType, instructor}) {
  return (
    <div className='courseItem'>
        <Image src={image} rounded width={200} height={150} />
        <h1>{name}</h1>
        <p>{price}TL</p>
        <p>{courseType}</p>
        <p>{instructor}</p>
        <Button variant="primary" href="/coursedetail" >Derse Kaydol</Button>{' '}

    </div>
  )
}

export default CourseItem