import { useState } from 'react'
import AddOffer from './AddOffer'
import AddAffiliate from './AddAffiliate'
import SubscriberList from './ListSubscribers'

export default function  AdminMain() {


  return (
    <div>
      <SubscriberList/>
      <AddOffer/>
      <AddAffiliate/>
    </div>
  )
}