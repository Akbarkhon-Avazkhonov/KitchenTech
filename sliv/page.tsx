// pages/sliv.tsx
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const urls = [
    "https://www.amazon.com/dp/B0CSZ7WBYW?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
    "https://www.amazon.com/dp/B0DQLVCQPZ?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
    "https://www.amazon.com/dp/B0BRL9F8HV?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
    "https://www.amazon.com/dp/B0DJFBF3SH?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
    "https://www.amazon.com/dp/B00004SGFW?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
    "https://www.amazon.com/dp/B00NGV4E1G?tag=" + process.env.NEXT_PUBLIC_AMAZON_TAG,
  ]
  const selected = urls[Math.floor(Math.random() * urls.length)]

  return {
    redirect: {
      destination: selected,
      permanent: false,
    },
  }
}

export default function SlivRedirect() {
  return null
}
