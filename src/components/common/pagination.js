import React from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';
const Pagination = (props) => {
  //[1,2,3]
  const { itemCount, pageSize, currentPage, onPageChange } = props
  console.log(currentPage)

  const pageCount = Math.ceil(itemCount / pageSize)
  //   console.log(pageCount)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  //generate array with thesse numbers



  return (
    <nav>
      <ul className='pagination'>
        {pages.map(page => (<li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
          <a className='page-link' onClick={() => onPageChange(page)}>{page}</a></li>))}


      </ul>
    </nav>


  );
}
//define type Checking Requirements for the pagination Component
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}
export default Pagination;