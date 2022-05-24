import styled from "styled-components";

export const Layout = styled.div`
  background: #666;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 350px;
`;

export const Box = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 10px 40px;

  & + & {
    margin-top: 10px;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin: 36px 0;
`;

export const Logo = styled.img`
  margin: 0 auto;
  //width: 175px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding-left: 8px;

  & + & {
    margin-top: 6px;
  }
`;

export const FBLogin = styled.div`
  color: #385185;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;
export const ForgotPassword = styled.div`
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
`;

export const BtnSign = styled.button`
  background: #0095f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 10px 9px;
  margin: 16px 0;
  cursor: pointer;
`;

export const SignupWrapper = styled.div`
  padding: 15px 0;
  font-size: 14px;
  text-align: center;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #0095f6;
  }
`;
