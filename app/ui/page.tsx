
import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { AccessTokenRequest, getSession, Session } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';
import { useUser } from '@auth0/nextjs-auth0/client';
import jwt from 'jsonwebtoken';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

 var user = "";

export default function Page({example}: {example: any}) {
 console.log("running page  ");
  if (example) {  
    console.log("example " + example);
  } else {
    console.log("no example");
  }
   // const { accessToken } = await getAccessToken();
  user = "";
  
 
  
 
 
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {<AcmeLogo />}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <div className={styles.shape}></div>
          </div>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome tos Pshyc Safety.</strong> The new innovative way to measure, report and take action on Psycological Safety at your organisation.
          </p>
           {/* ... */}
        {user ? (
            <Link
            href="/admin"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Admin</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        ) : (
          <>
          <Link
            href="/api/auth/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/signup"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          </>
           )}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/5csCover.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
           <Image
            src="/5csCover.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: { req: IncomingMessage; res: ServerResponse; }) {
  const session = await getSession(context.req, context.res);

  if (!session || !session.user) {
    // User is not logged in, redirect to login page or handle accordingly
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  }

  // Extract roles from the user's session. This depends on how roles are stored.
  // Assuming roles are included in the ID token as a custom claim:
  const roles = session.user['https://the5cs.com/roles']; // Replace with your actual namespace

  return { props: { user: session.user, roles } };
}