import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/preview-colection/preview-collection.component';

import { selectCollections } from '../../redux/shop/shop.selector'

const ShopPage = ({ collections }) => {
    return (
        <div>
            {collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionPreview
                    key={id} {...otherCollectionsProps} />
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps, null)(ShopPage);