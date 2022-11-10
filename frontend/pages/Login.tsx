import styled from "@emotion/styled";
import { NextPage } from "next";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import ContentTemplate from "../components/templates/ContentTemplate";

type SmallTextProps = {
  color?: string;
};

const SmallText = styled.p<SmallTextProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  color: ${(props) => (props.color ? props.color : "#c6c6c6")};
  margin: 0.2rem;
  padding: 0;
`;

const Title = styled.h2`
  display: inline-block;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  color: #039c00;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.22);
  margin: 0.5rem;
`;

const LoginInput = styled.input`
  width: 317px;
  height: 56px;
  left: 482px;
  top: 257px;
  padding-left: 1rem;
  margin: 0.5rem;

  background: #fefefe;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
`;

const LoginButton = styled.button`
  width: 317px;
  height: 56px;
  margin: 0.5rem;

  background: #039c00;
  border-radius: 55px;
  border: none;
  color: #fff;
`;

const SectionLine = styled.div`
  height: 1px;
  width: 48%;
  margin: 1rem;

  background: #d9d9d9;
`;

const SocialLoginButton = styled.button`
  border: 0;
  background: none;
  margin: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const SocialLoginImg = styled.img`
  width: 48px;
`;

const Login: NextPage = () => {
  return (
    <ContentTemplate>
      <SmallText>힘내라 내일의 나!</SmallText>
      <Title>내일부터 진짜 한다</Title>
      <LoginInput type="text" placeholder="아이디를 입력해주세요" />
      <LoginInput type="text" placeholder="비밀번호를 입력해주세요" />
      <LoginButton>로그인</LoginButton>
      <SectionLine></SectionLine>
      <SmallText color="#A0A0A0">소셜 로그인</SmallText>
      <SocialLoginButton
        onClick={() => {
          console.log("clicked!");
        }}
      >
        <SocialLoginImg src="/btnGNaver.png" alt="네이버 로그인" />
      </SocialLoginButton>
    </ContentTemplate>
  );
};

export default Login;
