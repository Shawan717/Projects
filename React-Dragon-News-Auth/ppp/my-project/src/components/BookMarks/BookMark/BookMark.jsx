
import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    const {Title}=bookMark
    return (
        <div>
            <p>{Title}</p>
        </div>
    );
};

BookMark.propTypes = {
    bookMark : PropTypes.object
};

export default BookMark;