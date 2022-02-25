import React, { useRef } from 'react'
import { useSearchProduct } from '../../utils/hooks/useSearchProduct'
import { useParams, useHistory } from 'react-router-dom'
import Loader from '../../UI/Loader'
import Slider from 'react-slick'
import {
  GalleryImages,
  DetailsContainer,
  InfoDiv,
} from './ProductDetails.styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Badge, Button } from 'react-bootstrap'
import { useCart } from '../../providers'
const ProductDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const { productId } = useParams<{ productId?: string }>()

  const { data, isLoading } = useSearchProduct(productId)
  console.log(data)

  const { addItemToCart } = useCart()
  const inputQty = useRef(null)

  const history = useHistory()

  const AddToCart = () => {
    addItemToCart({ data: data.results[0], qty: inputQty.current.value })
    history.push('/cart')
  }

  return isLoading ? (
    <Loader />
  ) : (
    <DetailsContainer>
      <GalleryImages>
        <Slider {...settings}>
          {data.results[0].data.images.map((image: any) => (
            <div key={image.id}>
              <img src={image.image.url} />
            </div>
          ))}
        </Slider>
      </GalleryImages>

      <InfoDiv>
        <h2>{data.results[0].data.name} </h2>
        <h3>$ {data.results[0].data.price} </h3>
        <label>
          <strong>SKU: </strong>
          {data.results[0].data.sku}{' '}
        </label>

        <label>
          {' '}
          <strong>Category: </strong>
          {data.results[0].data.category.slug}{' '}
        </label>
        <div className="badges-container">
          {data.results[0].tags.map((tag: any, index: any) => (
            <Badge className="badge" key={index} bg="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <p>{data.results[0].data.short_description}</p>
        <input
          className="qty-input"
          type="number"
          placeholder="amount"
          min={0}
          ref={inputQty}
          max={data.results[0].data.stock}
        />

        <Button
          disabled={data.results[0].data.stock === 0}
          className="cart-btn"
          onClick={AddToCart}
        >
          Add to cart
        </Button>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {data.results[0].data.specs.map((spec: any, index: any) => (
            <tr key={index}>
              <td>{spec.spec_name}</td>
              <td>{spec.spec_value}</td>
            </tr>
          ))}
        </table>
      </InfoDiv>
    </DetailsContainer>
  )
}
export default ProductDetails
