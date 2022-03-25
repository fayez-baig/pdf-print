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
  columns: 2 280px;
  column-gap: 1rem;
  background: red;
  color: white;
  margin: 0 0 1rem;
  display: inline-block; /* stops block being split across columns. Could use break-inside: avoid for modern browsers; */
  width: 100%;
  break-inside: avoid;
  text-align: center;
  font-weight: bold;

  @media print {
    break-inside: avoid;
    -webkit-break-inside: avoid;
  }
`;

export const ContentBox = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  &:after {
    display: table;
    content: "";
    clear: both;
  }
`;

export const Wrapper = styled.div`
  columns: 2 280px;
  column-gap: 1rem;
  font-size: 1.2rem;
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  height: 100%;
  margin-right: 2rem;
  @media print {
    height: 100px;
    width: 100px;
  }
`;
