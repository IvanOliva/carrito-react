import { compose } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';
import { selectCollectionIsFetching } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isFetching: selectCollectionIsFetching
});


const CollectionOverviewContainer = connect(mapStateToProps, null)(WithSpinner(CollectionOverview));
// La linea comentada es lo mismo que lo de abajo sin usar compose

// const CollectionOverviewContainer = compose(
//     connect(mapStateToProps, null),
//     WithSpinner
// )(CollectionOverview);

export default CollectionOverviewContainer;