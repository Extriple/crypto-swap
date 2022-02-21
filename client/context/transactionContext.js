import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

export const TransactionContext = React.createContext()

let eth
if (typeof window !== 'undefined') {
  eth = window.eth
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()

  useEffect(() => {
    checkWallet()
  }, [])

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Install Metamask')

      //Stala obsluguje otwarcie okna metamask oraz UI connect to the network
      const account = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(account[0])
    } catch (err) {
      console.log(err)
      throw new Error('No eth objects')
    }
  }

  //Connect to the wallet
  const checkWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Install metamask')
      const account = await metamask.request({ method: 'eth_requestAccounts' })
      if (account.length) {
        setCurrentAccount(account[0])
      }
    } catch (error) {
      console.error(error)
      throw new Error('No eth objects')
    }
  }

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  )
}
