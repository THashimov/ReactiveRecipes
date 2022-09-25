import createReactClass from 'create-react-class';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'

const CarouselItem = createReactClass({
    getDefaultProps: function() {
        return {};
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {},
    componentWillUnmount: function() {},
    render: function() {
        return (
            <div className='carousel-item'>
                <img src={`images/${this.props.image}`} alt='' />
                <p className='carousel-item-title'>{this.props.title}</p>
                <div className='carousel-item-rating'>
                    <div className='rating-stars'>
                        {Array(this.props.solidCount).fill(null).map((e, i) => <FontAwesomeIcon key={i} icon={faStarSolid} />)}
                        {Array(this.props.regularCount).fill(null).map((e, i) => <FontAwesomeIcon key={i} icon={faStarRegular} />)}
                    </div>
                    <p className='rating-count'>{this.props.rating}</p>
                </div>
            </div>
        );
    }
});

export default CarouselItem;