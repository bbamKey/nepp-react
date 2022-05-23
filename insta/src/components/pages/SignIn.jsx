import { Link } from "react-router-dom";
import {
  Layout,
  Main,
  Box,
  LogoWrapper,
  Logo,
  Form,
  InputText,
  BtnSign,
  FBLogin,
  ForgotPassword,
  SignupWrapper,
} from "../atoms/login";

const SignIn = () => {
  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Form>
            <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
            <InputText type="password" placeholder="비밀번호" />
            <BtnSign>로그인</BtnSign>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셧나요?</ForgotPassword>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignIn;
