import { useFetchAllBooks } from './fetch-data'

export const useFetchInitSales = () => {
  const FetchAllBooks = useFetchAllBooks()

  return {
    FetchAllBooks
  }
}
