import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps, null)(WithSpinner(CollectionPage));


export default CollectionPageContainer;