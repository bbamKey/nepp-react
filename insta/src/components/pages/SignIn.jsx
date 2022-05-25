import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { getToken } from "../../apis/user";
import instance from "../../apis";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message, token } = await getToken(form);
    console.log(success, message, token);

    if (success) {
      instance.defaults.headers.common["Authorization"] = token;
      localStorage.token = token;
      //navigate("/");
    } else {
      alert(message);
    }
  };

  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Form onSubmit={handleSubmit}>
            <InputText
              required
              name="user_name"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleChange}
            />
            <InputText
              required
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            />
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
