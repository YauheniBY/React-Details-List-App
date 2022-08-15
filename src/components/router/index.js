
import About from '../pages/About'
import Goods from '../pages/Goods'
import GoodID from '../pages/GoodID'
import Error from '../pages/Error'

export const routes = [
    {path:'/about', element: 'About', exact: true},
    {path:'/goods', element: 'Goods', exact: true},
    {path:'/goods/:id', element: 'GoodID', exact: true},
    {path:'/:some', element: 'Error', exact: true},
]