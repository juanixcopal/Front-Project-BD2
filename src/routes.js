import Books from './pages/books/index.js'
import Sales from './pages/sales/index.js'
import User from './pages/user/index.js'
import PreviousSales from './pages/previous sales/index.js'

var routes = [
  {
    path: '/books',
    name: 'Books',
    icon: 'bi bi bi-book-half text-primary',
    component: Books,
    layout: '/neo4six'
  },
  {
    path: '/sales',
    name: 'Sales',
    icon: 'bi bi bi-cart-check text-success',
    component: Sales,
    layout: '/neo4six'
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'bi bi-people text-info',
    component: User,
    layout: '/neo4six'
  },
  {
    path: '/previousSales',
    name: 'Previous Sales',
    icon: 'bi bi-check2-circle text-warning',
    component: PreviousSales,
    layout: '/neo4six'
  }

  //    text-primary
  //    text-warning
  //    text-info
  //    text-success
  //    text-danger
  //    text-dark
  //    text-light
  //    text-darker
]

export default routes
