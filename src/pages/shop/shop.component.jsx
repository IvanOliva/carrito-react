import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
import { selectCollectionIsFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
                )} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStartAsync: () =>
        dispatch(fetchCollectionStartAsync())
})

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionIsFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);