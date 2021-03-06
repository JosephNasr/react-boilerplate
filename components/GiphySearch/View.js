import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';
import Loading from './Loading';
import LoadError from './Error';

const View = ({
    loading, error, data, initialQuery, onLoad,
    RenderSearchInput, RenderImage, RenderLoading, RenderError
}) => (
    <div>
        <SearchInput initialQuery={initialQuery} onSearch={onLoad} />
        <br/>
        <section>
            { loading ? <Loading /> : ( error ? <LoadError error={error} /> : <Image src={data} /> ) }
        </section>
    </div>
);

// View.propTypes = {
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.bool.isRequired,
//     src: PropTypes.string.isRequired,
//     initialQuery: PropTypes.string.isRequired,
//     onSearch: PropTypes.func.isRequired,
//     RenderImage: PropTypes.func,
//     RenderLoading: PropTypes.func,
//     RenderError: PropTypes.func
// };

// View.defaultProps = {
//     RenderSearchInput: SearchInput,
//     RenderImage: Image,
//     RenderLoading: Loading,
//     RenderError: LoadError
// };

export default View;
