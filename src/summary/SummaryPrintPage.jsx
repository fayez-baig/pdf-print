import React from "react";
import faker from "faker";
import {
  PDFPage,
  StyledBox,
  StyledHeader,
  StyledHeaderColumnCenter,
  StyledHeaderColumnRight,
  StyledHeaderWrapper,
  StyledImage,
  Wrapper,
} from "./summaryPage";

const randomInteger = (min = 2, max = 4) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const SummaryPrintPage = () => {
  const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  const fourParaTexts = faker.lorem.paragraphs(randomInteger(4));
  return (
    <PDFPage>
      <StyledHeaderWrapper>
        <StyledHeader>
          <div>Hitch Brand</div>
          <StyledHeaderColumnCenter></StyledHeaderColumnCenter>
          <StyledHeaderColumnRight> </StyledHeaderColumnRight>
        </StyledHeader>
      </StyledHeaderWrapper>
      {arr.map((row, index) => (
        <Wrapper key={index}>
          <StyledBox>
            <StyledImage
              src="https://sandbox12.playground.artefact.com/wp-content/uploads/sites/25/2021/08/tshirt-2.jpg"
              width={100}
              height={100}
            />
            <p>
              <span>Yo Para Num: {index}</span> <br />
              {faker.lorem.paragraphs(randomInteger())}
              {/* {fourParaTexts} */}
            </p>
          </StyledBox>
          <StyledBox>
            <StyledImage
              src="https://sandbox12.playground.artefact.com/wp-content/uploads/sites/25/2021/08/tshirt-2.jpg"
              width={100}
              height={100}
            />
            <p>
              <span>Yo Para Num: {index}</span> <br />
              {faker.lorem.paragraphs(randomInteger())}
              {/* {fourParaTexts} */}
            </p>
          </StyledBox>
        </Wrapper>
      ))}
    </PDFPage>
  );
};

export default SummaryPrintPage;
