import { useState, useContext, createContext } from 'react'

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const urls = {
    affiliates: "http://localhost:8000/affiliates/",
    offers: "http://localhost:8000/offers/",
    subscribers: "http://localhost:8000/subscribers/",
    affiliate: (id) => `http://localhost:8000/affiliates/${id}`,
    offer:  (id) => `http://localhost:8000/offers/${id}`,
    subscriber: (id) => `http://localhost:8000/subscribers/${id}`
  }

  const request = {
    get: async (url, callBack, key=null) => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        key ? callBack(data[key]) : callBack(data)
      } else console.log(response)
    },

    post: async (url, data, callBack) => {
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        callBack()
      }
    },

    put: async (url, data, callBack) => {
      const fetchConfig = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        callBack()
      }
    },

    delete: async (url, callBack) => {
      const response = await fetch(url, { method: "delete" })
      if (response.ok) {
        callBack()
      }
    }
  }



  const [affiliates, setAffiliates] = useState([])
  const [offers, setOffers] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [selection, setSelection] = useState(null)

  const loadAffiliates = async () => {
    request.get(urls.affiliates, setAffiliates, "affiliates")
  }

  const loadOffers = async () => {
    request.get(urls.offers, setOffers, "offers")
  }

  const loadSubscribers = async () => {
    request.get(urls.subscribers, setSubscribers, "subscribers")
  }


  const store = {
    urls: urls,
    request: request,

    affiliates: affiliates,
    offers: offers,
    subscribers: subscribers,

    setAffiliates: setAffiliates,
    setOffers: setOffers,
    setSubscribers: setSubscribers,

    loadAffiliates: loadAffiliates,
    loadOffers: loadOffers,
    loadSubscribers: loadSubscribers
  }
  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)


