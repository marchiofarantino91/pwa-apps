import router from "./router";
import store from "./store";
import getPageTitle from "./utils/get-page-title";
getPageTitle
router.beforeEach(async (to,from,next) => {

    document.title = getPageTitle(to.meta.title)

    const token = localStorage.getItem('TokenKey')
    if (to.path !== '/login' && !token) next({ path: '/login' })
    else next()
})