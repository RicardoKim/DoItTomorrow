import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const WholePageSection = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentSection = styled.section`
  box-sizing: border-box;

  position: absolute;
  width: 480px;
  height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fefefe;
  border: 1px solid #d9d9d9;
  border-radius: 45px;
`;

const ContentTemplate = ({ children }: PropsWithChildren) => {
  return (
    <WholePageSection>
      <ContentSection>{children}</ContentSection>
    </WholePageSection>
  );
};

export default ContentTemplate;
