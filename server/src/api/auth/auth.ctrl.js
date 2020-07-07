import Joi from '@hapi/joi';
import User from '../../models/user';

export const register = async (ctx) => {
  // 회원가입
  // Request Body 검증하기
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { name, email, password } = ctx.request.body;

  try {
    // email 중복 체크
    const exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      name,
      email,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true, // 자바스크립트로 쿠키를 조회할 수 없음
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { email, password } = ctx.request.body;

  // email,password가 없으면 error
  if (!email || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByEmail(email);
    // 계정이 존재하지 않으면 에러처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async (ctx) => {
  // 로그인 상태 확인, 토큰을 검증받는데 성공하면 ctx.state.user라는 곳에담긴다.
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

export const logout = async (ctx) => {
  // 로그아웃
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};
