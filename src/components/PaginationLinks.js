import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, nrOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === nrOfPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1).toString()
  const nextPage = "/page/" + (currentPage + 1).toString()
  return (
    <Pagination aria-label="Page navigation example">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous/>
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous href={prevPage} />
        </PaginationItem>
      )}
      {Array.from({ length: nrOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`page-nr${i + 1}`}>
            <PaginationLink href={`/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`page-nr${i + 1}`}>
            <PaginationLink href={`/${i === 0 ? "" : "page/" + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next/>
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
