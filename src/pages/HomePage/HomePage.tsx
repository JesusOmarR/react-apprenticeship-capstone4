import React, { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import {
  HomeContainer,
  ListContainer,
  CategoriesContainer,
  SliderItem,
} from './Home.styled'
import Slider from 'react-slick'
import ProductList from '../ProductList'

// Mock Data
import featuredBanners from '../../mocks/en-us/featured-banners.json'
import featuredProducts from '../../mocks/en-us/featured-products.json'
import featuredCategorys from '../../mocks/en-us/product-categories.json'
import ItemList from '../../components/ItemsList/ItemList'

// Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomePage: React.FC<any> = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [showProduct, setShowProducts] = useState(false)
  return (
    <>
      {showProduct ? (
        <ProductList />
      ) : (
        <HomeContainer>
          <Carousel className="banner-carousel">
            {featuredBanners.results.map((banner: any) => (
              <Carousel.Item key={banner.id}>
                <Carousel.Caption className="banner-item">
                  <h3>{banner.data.title}</h3>
                  <p>{banner.data.description[0].text.substring(0, 50)}</p>
                </Carousel.Caption>
                <img
                  className="d-block w-100"
                  src={banner.data.main_image.url}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div>
            <CategoriesContainer>
              <h2> Categories</h2>
              <Slider {...settings}>
                {featuredCategorys.results.map((category: any) => (
                  <SliderItem key={category.id}>
                    <h3>{category.data.name}</h3>

                    <img src={category.data.main_image.url} />
                  </SliderItem>
                ))}
              </Slider>
            </CategoriesContainer>
          </div>

          <ListContainer>
            {featuredProducts.results.map((product: any) => (
              <ItemList key={product.id} item={product.data} />
            ))}
          </ListContainer>
        </HomeContainer>
      )}
      <Button onClick={() => setShowProducts(true)}>View All Products</Button>
    </>
  )
}

export default HomePage
