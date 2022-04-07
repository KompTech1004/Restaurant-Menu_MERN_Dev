import React from 'react';
import ReactGA from 'react-ga';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAX_LEN = 1;
const SLIDES_TO_SHOW = 1;

const getImages = (type, prodid, sliderNumber=1) => {
  const images = [];
  const imgClassName = sliderNumber === 1 ? "w-full touch product-image" : "touch w-full product-image";

  for (let index = 0; index < MAX_LEN; index++) {
      const path = `${process.env.PUBLIC_URL}/assets/${type}/${prodid}-${index}.jpg`;
        images.push
        (<div>
          <img src={path} alt="" className={imgClassName}/>
        </div>
        )
      }
  return images;
}

export default class MerchantListingMainImage extends React.Component {
    state = { 
        ctr:0,
        modalIsOpen: false,
    }
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }

    componentDidMount(){
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2

      })
    }
    toggleModal = () => {
      this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
      this.recordViewPhotosEvent()
    }
    goLeft = () => {
        const {ctr} = this.state
        if(ctr === 0)
            this.setState({ ctr: MAX_LEN-1});
        else 
            this.setState(state => ({ ctr: state.ctr-1 }));
        this.recordLeftRightCarousel('left')
    }
    goRight = () => {
        const {ctr} = this.state
        if(ctr === MAX_LEN-1)
            this.setState({ ctr: 0});
        else 
            this.setState(state => ({ ctr: state.ctr+1 }));
        this.recordLeftRightCarousel('right')
    }
    getImgPath=()=>{
        return process.env.PUBLIC_URL+"/assets/"
                    +this.props.type+"/"
                    +this.props.prodid+"-"+
                    +this.state.ctr
                    +".jpg"
    }
    
    /**
    * track view photos
    */
   recordViewPhotosEvent=()=>{
    const{productName}=this.props
    ReactGA.event({
        category: 'VIEW_PHOTOS_PRODUCT_PAGE',
        action:    'Clicked on view photos for '+productName,
        label: 'VIEW_PHOTOS_PRODUCT_PAGE'
        });
   }
    /**
    * track view photos left / right
    */
   recordLeftRightCarousel=(direction)=>{
    const{productName}=this.props
    ReactGA.event({
        category: `VIEW_PHOTOS_MODAL_${direction}_PRODUCT_PAGE`,
        action:    `Clicked on ${direction} on view photos modal for ${productName}`,
        label: `VIEW_PHOTOS_MODAL_${direction}_PRODUCT_PAGE`
        });
  }

  render(){
    const { modalIsOpen } = this.state;
    const {type, prodid} = this.props;

    const settings = {
      customPaging: function(i) {
        return (
          <>
          </>
        );
      },
      dots: true,
      // dotsClass: "radius10 w-full",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };    return (
      <>
      <div>
        {/* <div class="hide-desktop overflow-hidden minh-300-mobile">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {getImages(type, prodid)}
        </Slider>
        </div> */}
        <div class="pb-20 minh-200">
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={SLIDES_TO_SHOW}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {getImages(type, prodid, 2)}
        </Slider>
        </div>
      </div>
      </>
    )
}
}