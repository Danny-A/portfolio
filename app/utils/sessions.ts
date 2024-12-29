import { createCookieSessionStorage } from '@remix-run/node';

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      maxAge: 604_800,
      path: '/',
      secrets: [process.env.SESSION_SECRET!],
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      httpOnly: true,
    },
  });

export { getSession, commitSession, destroySession };
