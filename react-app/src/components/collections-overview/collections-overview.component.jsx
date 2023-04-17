import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({collections}) => {
    console.log("collections---------------------------------",collections);
    return  (
        <div className = 'collections-overview'>
        { 
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key = {id} {...otherCollectionProps} />
            ))
        }
        </div>
    );
}

const mapStateToProps = (state) => createStructuredSelector({
    collections : selectCollectionsForPreview
});


export default connect(mapStateToProps) (CollectionsOverview);