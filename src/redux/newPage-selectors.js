
export const getItems = (state) => {
    return state.newPage.items
}
export const getIsFetching = (state) => {
    return state.newPage.isFetching
}
export const getPageSize = (state) => {
    return state.newPage.pageSize
}

export const getTotalItemsCount = (state) => {
    return state.newPage.totalItemsCount
}
export const getCurrentPage = (state) => {
    return state.newPage.currentPage
}
export const getItemModal = (state) => {
    return state.newPage.modalItem
}
export const modalIsOpenedSelector = (state) => {
    return state.newPage.modalIsOpened
}