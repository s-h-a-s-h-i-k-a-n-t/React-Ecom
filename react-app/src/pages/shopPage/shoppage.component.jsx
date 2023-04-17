import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route,Switch } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { render } from '@testing-library/react';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
 

class ShopPage extends React.Component{
  state = {
      loading : true
  }
     render() {
     const {match} = this.props;
     const {loading} = this.state;
        return (
            <div className="shop-page">
                <Switch>
                {/* <Route exact path={`${match.path}`} component = {CollectionsOverview} />
                     <Route path={`${match.path}/:collectionId`} component = {CollectionPage}  /> */}
               
                {/* <Route exact path={`${match.path}`} component = {CollectionsOverview} /> */}
                    <Route exact path={`${match.path}`} render = {(props)=> <CollectionsOverviewWithSpinner isLoading = {loading} {...props} /> } />
                     <Route path={`${match.path}/:collectionId`} render = {(props)=> <CollectionPageWithSpinner isLoading = {loading} {...props} /> }  />
                </Switch>
                
            </div>
        )
    
     }

    componentDidMount(){
        const {updateCollections} = this.props;
       const collectionRef = firestore.collection('collections');
       collectionRef.onSnapshot( snapshot=>{
             const collectionsMap =   convertCollectionsSnapshotToMap(snapshot);
             updateCollections(collectionsMap);
             this.setState({loading: false});
             });
    }

    
}

const mapDispatchToProps = (dispatch) =>({
   updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps) (ShopPage);
