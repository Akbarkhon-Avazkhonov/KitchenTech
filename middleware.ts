import { NextRequest, NextResponse } from 'next/server'

const externalLinks = [
  "https://www.amazon.com/dp/B0CSZ7WBYW?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  "https://www.amazon.com/dp/B0DQLVCQPZ?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  "https://www.amazon.com/dp/B0BRL9F8HV?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  "https://www.amazon.com/dp/B0DJFBF3SH?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  "https://www.amazon.com/dp/B00004SGFW?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  "https://www.amazon.com/dp/B00NGV4E1G?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'kitchen_tech'

  // Если зашли на /redirect
  if (url.pathname === '/amazon') {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set(cookieName, '1', {
      path: '/',
      maxAge: 60,
      httpOnly: true,
    })
    return response
  }

  // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = externalLinks[Math.floor(Math.random() * externalLinks.length)]

      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}

// применяем middleware только к / и /redirect
export const config = {
  matcher: ['/', '/amazon'],
}
