import { postSale } from '../../data/Sales/post.js'

export const useActions = ({ selectedDate, selectedBookIds, totalPriceBooks, setSelectedBooks }) => {
  const createSale = async e => {
    e.preventDefault()

    const data = {
      fecha: selectedDate,
      totalPrice: totalPriceBooks,
      idsBooks: selectedBookIds
    }

    postSale({ data, setSelectedBooks })
  }

  return { createSale }
}
