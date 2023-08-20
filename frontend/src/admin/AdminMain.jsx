import { useState } from 'react'
import AddOffer from './AddOffer'
import AddAffiliate from './AddAffiliate'
import SubscriberList from './ListSubscribers'
import AffiliateList from './ListAffiliates'
import OfferList from './ListOffers'

export default function  AdminMain() {


  return (
    <div>
      <SubscriberList/>
      <OfferList/>
      <AffiliateList />
    </div>
  )
}