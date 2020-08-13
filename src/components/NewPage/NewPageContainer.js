import React from "react";
import NewPage from "./NewPage";
import {
  getItemsThunk,
  setItems,
  toggleIsFetching,
  setCurrentPage,
  setTotalItemsCount,
  setModalPathAC,
  closeModalAC
} from "../../redux/newPage-reducer";
import { connect } from "react-redux";
import {
  getItems,
  getItemModal,
  getIsFetching,
  getCurrentPage,
  getTotalItemsCount,
  getPageSize,
  modalIsOpenedSelector,
} from "../../redux/newPage-selectors";
import Preloader from "../../utils/Preloader.js";

class NewPageContainer extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.getItemsThunk(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    let { pageSize } = this.props;
    this.props.getItemsThunk(pageNumber, pageSize);
  };
  
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <NewPage
          items={this.props.items}
          modalItem={this.props.modalItem}
          modalIsOpened={this.props.modalIsOpened}
          setModalPathAC={this.props.setModalPathAC}
          closeModalAC={this.props.closeModalAC}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    items: getItems(state),
    modalItem: getItemModal(state),
    modalIsOpened: modalIsOpenedSelector(state), 
    isFetching: getIsFetching(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
  };
};

export default connect(mapStateToProps, {
  toggleIsFetching,
  setItems,
  getItemsThunk,
  setCurrentPage,
  setTotalItemsCount,
  setModalPathAC,
  closeModalAC
})(NewPageContainer);
