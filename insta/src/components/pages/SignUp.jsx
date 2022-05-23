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
  SignupWrapper,
} from "../atoms/login";

const SignUp = () => {
  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
          </LogoWrapper>
          <Form>
            <InputText placeholder="전화번호 또는 이메일 주소" />
            <InputText placeholder="성명" />
            <InputText placeholder="사용자 이름" />
            <InputText type="password" placeholder="비밀번호" />
            <BtnSign>가입</BtnSign>
          </Form>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요? <Link to="/signin">로그인</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignUp;
