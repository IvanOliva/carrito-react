import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';

import CollectionPreview from '../preview-colection/preview-collection.component'

import { sellectCollectionsForPreview } from '../../redux/shop/shop.selector'


const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionsProps }) => (
            <CollectionPreview
                key={id} {...otherCollectionsProps} />
        ))}
    </div >
)


const mapStateToProps = createStructuredSelector({
    collections: sellectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionOverview);