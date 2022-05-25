import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { registUser } from "../../apis/user";

const SignUp = () => {
  const navigate = useNavigate("");
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate(form)) return;

    const { success, message } = await registUser(form);
    console.log(success);

    if (success) {
      alert("환영합니다.");
      navigate("/signin");
    } else {
      alert(message);
      setForm((prev) => ({ ...prev, user_name: "" }));
    }
  };

  const validate = ({ user_name, password, passwordConfirm }) => {
    if (user_name.length < 4) {
      alert("아이디를 4자이상 입력해 주세요.");
      return false;
    }

    if (!validatePassword(password, passwordConfirm, user_name)) return false;

    return true;
  };

  const validatePassword = (password, passwordConfirm, user_name) => {
    const chk_num = password.search(/[0-9]/g);
    const chk_eng = password.search(/[a-z]/gi);
    const chk_spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if (chk_num < 0 || chk_eng < 0 || chk_spe < 0) {
      alert("비밀번호는 숫자와 영문자, 특수문자를 혼용하여 입력해 주세요.");
      return false;
    }
    if (password.search(/\s/) !== -1) {
      alert("비밀번호는 공백없이 입력해 주세요.");
      return false;
    }

    if (/(\w)\1\1\1/.test(password)) {
      alert("비밀번호에 같은 문자를 4번 이상 사용하지 말아 주세요.");
      return false;
    }
    if (password.search(user_name) > -1) {
      alert("ID가 포함된 비밀번호는 사용하지 말아 주세요.");
      return false;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호를 확인해 주세요.");
      return false;
    }

    return true;
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
              name="name"
              placeholder="성명"
              onChange={handleChange}
            />
            <InputText
              required
              value={form.user_name}
              name="user_name"
              placeholder="사용자 이름"
              onChange={handleChange}
            />
            <InputText
              required
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            />
            <InputText
              required
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handleChange}
            />
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
