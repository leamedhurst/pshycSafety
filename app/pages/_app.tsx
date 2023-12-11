import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import React from 'react'
 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  console.log("getInitialProps in _app");
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}