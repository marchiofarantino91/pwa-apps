
const title = "Apps"
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
      return `${pageTitle} - ${title}`
    }
    return `${title}`
  }
  