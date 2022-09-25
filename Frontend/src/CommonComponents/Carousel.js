import createReactClass from 'create-react-class';

import CarouselItem from './CarouselItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = createReactClass({
    getDefaultProps: function() {
        return {};
    },
    getInitialState: function() {
        return {
            slide: 1,
            maxSlides: Math.ceil(this.props.items.length / 3)
        };
    },
    componentDidMount: function() {},
    componentWillUnmount: function() {},
    render: function() {
        return (
            <div className='carousel-container'>
                <span className='carousel-previous' onClick={this.handleSlide} data-action='previous'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <div className="carousel-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="carousel-body">
                    {this.props.items.map((e, i) => <CarouselItem key={i} {...{
                        image: e.image,
                        title: e.title,
                        solidCount: e.solidCount,
                        regularCount: e.regularCount,
                        rating: e.rating
                    }} style={`${-(this.state.slide - 1) * (600 + 30)}px`} />)}
                </div>
                <span className='carousel-next' onClick={this.handleSlide} data-action='next'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
        );
    },
    handleSlide: function (e) {
        const action = e.currentTarget.dataset?.action;
        if (!action) { return; }

        const modifier = action === 'next' ? 1 : -1;
        let slide = this.state.slide + modifier;

        if (action === 'next'
        && this.state.slide >= this.state.maxSlides)
        { slide = 1; }

        if (action === 'previous'
        && this.state.slide <= 1)
        { slide = this.state.maxSlides; }

        this.setState({ slide: slide });

        const carouselItemElements = e.currentTarget
        .closest('.carousel-container')
        .querySelectorAll('.carousel-item');

        for (let i = 0; i < carouselItemElements.length; i++) {
            carouselItemElements[i].style.left = `${-(slide - 1) * (600 + 30)}px`;
        }
    }
});

export default Carousel;