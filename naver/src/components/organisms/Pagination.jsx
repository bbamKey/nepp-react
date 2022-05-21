import { useMemo } from "react";
import styled from "styled-components";

const getPageList = (start, end) => {
  const pageList = [];
  for (let i = start; i <= end; i++) {
    pageList.push(i);
  }

  return pageList;
};

const Pagination = ({ listSize, perPage, now, perBtn, onSetPage }) => {
  const last = Math.ceil(listSize / perPage);

  let isPrevShow = now > 1;
  let isNextShow = now < last;
  let start = 0;
  let end = 0;

  if (last < perBtn) {
    start = 1;
    end = last;
    isPrevShow = false;
    isNextShow = false;
  } else {
    const side = Math.floor(perBtn / 2);

    start = now - side;
    if (start < 1) {
      start = 1;
    } else if (now < side) {
      start = 1;
    }

    end = start + (perBtn - 1);
    if (end > last) {
      end = last;
      start = last - perBtn + 1;
    } else if (now > last - side) {
      end = last;
      start = last - perBtn + 1;
    }
  }

  const pageList = useMemo(() => getPageList(start, end), [start, end]);

  return (
    <>
      <PageList>
        {isPrevShow && (
          <BtnPage onClick={() => onSetPage(now - 1)}>{"<"}</BtnPage>
        )}
        {pageList.map((page) => (
          <BtnPage
            key={page}
            onClick={() => onSetPage(page)}
            isActive={now === page}
          >
            {page}
          </BtnPage>
        ))}
        {isNextShow && (
          <BtnPage onClick={() => onSetPage(now + 1)}>{">"}</BtnPage>
        )}
      </PageList>
    </>
  );
};
const PageList = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const BtnPage = styled.button`
  margin: 0 5px;
  border-radius: ${({ isActive }) => isActive && "50%"};
`;
export default Pagination;
