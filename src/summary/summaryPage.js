import styled from "styled-components";

export const PDFPage = styled.div`
  padding: 3rem;
  padding-top: 0;
  overflow: auto;

  @media print {
    display: block;

    @viewport {
      orientation: portrait;
    }
    @page {
      padding: 0;
      margin: 10px 0;
      size: A4 portrait;
    }
    /* page-break-after: always; */
  }
`;

export const StyledHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;
export const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  font-size: 1.4rem;

  padding: 0.5rem 3rem;
`;

export const StyledHeaderColumnCenter = styled.div`
  max-width: 50%;
`;
export const StyledHeaderColumnRight = styled.div``;

export const StyledBox = styled.div`
  width: 50%;
  display: flex;
  min-width: 50%;
  /* border: 1px solid #b7bccf; */
  padding: 1rem;
  margin-top: 3rem;
  float: left;
`;

export const Wrapper = styled.div`
  float: left;
  @media print {
    break-inside: avoid;
    -webkit-break-inside: avoid;
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 2rem;
  @media print {
    height: 100px;
    width: 100px;
  }
`;
