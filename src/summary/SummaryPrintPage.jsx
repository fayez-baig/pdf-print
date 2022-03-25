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
  ContentBox,
} from "./summaryPage";

const randomInteger = (min = 1, max = 6) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const SummaryPrintPage = () => {
  // const arr = [
  //   [1, 2],
  //   [3, 4],
  //   [5, 6],
  //   [7, 8],
  //   [9, 10],
  //   [11, 12],
  // ];

  const fourParaTexts = faker.lorem.paragraphs(randomInteger(4));
  return (
    <PDFPage>
      <Wrapper>
        {Array(20)
          .fill(randomInteger() + Math.random())
          .map((row, index) => (
            <StyledBox>
              {/* <ContentBox> */}
              <StyledImage
                src="https://sandbox12.playground.artefact.com/wp-content/uploads/sites/25/2021/08/tshirt-2.jpg"
                width={100}
                height={100}
              />
              {/* </ContentBox> */}

              <p>
                <span>Yo Para Num: {index}</span> <br />
                {faker.lorem.paragraphs(randomInteger())}
                {/* {fourParaTexts} */}
              </p>
            </StyledBox>
          ))}
      </Wrapper>
    </PDFPage>
  );
};

export default SummaryPrintPage;
