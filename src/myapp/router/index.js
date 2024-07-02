import DefaultLayout from "../compoments/layout/DefaultLayout"
import Home from "../page/Home"
import Login from '../page/Login'
import Regsiter from "../page/Regsiter"
import Profile from '../page/Profile'
import Post from "../page/Profile/compoments/Post"
import HeaderOnlyLayout from "../compoments/layout/HeaderOnlyLayout"
import Photo from "../page/Photo"

const publicRoter = [
    { path: '/', element: Home, layout: DefaultLayout },
    { path: '/login', element: Login, layout: null },
    { path: '/regsiter', element: Regsiter, layout: null },
    { path: '/profile/*', element: Profile, layout: HeaderOnlyLayout },
    { path: '/photo/*', element: Photo, layout: null }
]

const profileRoutes = [
    { path: '/', element: Post }
]

export {
    publicRoter,
    profileRoutes,
}