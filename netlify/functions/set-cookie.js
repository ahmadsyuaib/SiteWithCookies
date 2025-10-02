export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': [
        'visible_cookie=hello-from-netlify; Path=/; Max-Age=86400; SameSite=Lax',
        'secret_cookie=server-only; Path=/; Max-Age=86400; HttpOnly; SameSite=Lax'
      ],
      'Content-Type': 'text/html'
    },
    body: 'Cookies set. <a href="/">Go back</a>'
  };
}
