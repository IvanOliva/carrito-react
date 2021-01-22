import React from 'react';
import './preview-collection.styles.scss';

const CollectionPreview = ({ id, title, items, routeItems }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {items
                .filter((item, idx) => (idx < 4))
                .map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}

        </div>
    </div>
)

export default CollectionPreview;