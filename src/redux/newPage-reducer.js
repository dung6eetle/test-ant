import { itemsApi } from "../api/Api";

const SET_ITEMS = "SET_ITEMS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_MODAL_PATH = "SET_MODAL_PATH";
const CLOSE_MODAL = "CLOSE_MODAL";

let initialState = {
  items: [],
  isFetching: false,
  pageSize: 15,
  totalItemsCount: 0,
  currentPage: 1,
  modalItem: {
    name: null,
    image:null,
    description:null
  }, 
  modalIsOpened: false
};
const newPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS: {
      return { ...state, items: action.items };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_ITEMS_COUNT: {
      return { ...state, totalItemsCount: action.count };
    }
    case SET_MODAL_PATH: 
      console.log('set modal path', action) ;
      return {
        ...state,
        modalItem: action.modalItem,
        modalIsOpened: true
        
      };
    case CLOSE_MODAL: 
      return {
        ...state,
        modalIsOpened: false
      }
    default: 
      return state;
      
  }
};

export const setItems = (items) => ({ type: SET_ITEMS, items });

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalItemsCount = (totalItemsCount) => ({
  type: SET_TOTAL_ITEMS_COUNT,
  count: totalItemsCount,
});

export const setModalPathAC = (modalItem, modalIsOpened) => ({
    type: SET_MODAL_PATH,
    modalItem,
    modalIsOpened: modalIsOpened
});
export const closeModalAC = (modalIsOpened) => ({
  type: CLOSE_MODAL,
  modalIsOpened
})

export const getItemsThunk = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let response = await itemsApi.getItems(page, pageSize)
    dispatch(toggleIsFetching(false));
    console.log('items reducer', response)
    dispatch(setItems(response.data.data));
    dispatch(setTotalItemsCount(response.data.countOfPages));
  };
};


export default newPageReducer;
