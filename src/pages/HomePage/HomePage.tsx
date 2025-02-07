import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import {
  HomeContainer,
  ListContainer,
  CategoriesContainer,
  SliderItem,
} from './Home.styled'
import Slider from 'react-slick'
import ItemList from '../../components/ItemsList/ItemList'
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategory'
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts'
import { useHistory } from 'react-router-dom'
import Loader from '../../UI/Loader'

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

  const history = useHistory()

  const { data: featuredBanners, isLoading } = useFeaturedBanners()
  const { data: featuredCategories, isLoading: LoadingCategories } =
    useFeaturedCategories()
  const { data: featuredProducts, isLoading: loadingProducts } =
    useFeaturedProducts()

  return isLoading || LoadingCategories || loadingProducts ? (
    <Loader />
  ) : (
    <>
      <HomeContainer>
        <Carousel className="banner-carousel">
          {featuredBanners?.results?.map((banner: any) => (
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
              {featuredCategories.results.map((category: any) => (
                <SliderItem
                  onClick={() => history.push(`/products?cat=${category.id}`)}
                  key={category.id}
                >
                  <h3>{category.data.name}</h3>

                  <img src={category.data.main_image.url} />
                </SliderItem>
              ))}
            </Slider>
          </CategoriesContainer>
        </div>

        <ListContainer>
          {featuredProducts?.results?.map((product: any) => (
            <ItemList
              key={product.id}
              item={{ ...product.data, id: product.id }}
            />
          ))}
        </ListContainer>
        <Button
          variant="outline-info"
          className="products-btn"
          role="showProducts"
          onClick={() => {
            history.push('/products')
          }}
        >
          View All Products
        </Button>
      </HomeContainer>
    </>
  )
}

export default HomePage
