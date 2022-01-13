import {usePagination, useTable} from "react-table";
import React from "react";
import {Table} from "reactstrap";
import DatatablePagination from "./DatatablePagination";
import {connect} from "react-redux";

const TableAjax = ({columns, data, fetchData, loading, pageCount: controlledPageCount, debug = false}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: {pageIndex, pageSize},
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 0}, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  )

  // Listen for changes in pagination and use the state to fetch our new data
  // React.useEffect(() => {
  //   fetchData({pageIndex, pageSize})
  // }, [fetchData, pageIndex, pageSize])

  // Render the UI for your table
  return (
    <>
       {debug &&
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      }
      <Table striped {...getTableProps()} responsive bordered>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps({
                  className: cell.column.cellClass,
                })}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
        <tr>
          {loading && (
            // Use our custom loading state to show a loading indicator
            <td colSpan="10000">Loading...</td>
          )}
        </tr>
        </tbody>
      </Table>
      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[1, 4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={true}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      /> 
      
    </>

  )
};

export default TableAjax;
