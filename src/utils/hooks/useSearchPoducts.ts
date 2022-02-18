import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useSearchProducts(searchTerm: any) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()
  // prettier-ignore

  const [foundProducts, setFoundProducts] = useState<any>(() => ({
    data: {},
    isLoading: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function searchProducts() {
      try {
        setFoundProducts({ data: {}, isLoading: true })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]`
          )}&q=[[fulltext(document, "${searchTerm}")]]&lang=en-us`,
          {
            signal: controller.signal,
          }
        )
        const data = await response.json()

        setFoundProducts({ data, isLoading: false })
      } catch (err) {
        setFoundProducts({ data: {}, isLoading: false })
        console.error(err)
      }
    }

    searchProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, searchTerm])

  return foundProducts
}
