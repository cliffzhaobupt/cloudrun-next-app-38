import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Basic認証
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === 'oki' && pwd === 'iko') {
      return NextResponse.next();
    }
  }

  return NextResponse.json(
    { message: 'Basic認証通ってへんやん！' },
    {
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        'www-authenticate': 'Basic',
      },
    }
  );
}
