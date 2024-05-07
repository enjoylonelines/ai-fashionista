'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import KakaoScript from '@/services/kakaoScript';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

const theme = {
  components: {
    Switch: {
      handleBg: '#00FFD1',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [os, setOs] = useState('');

  useEffect(() => {
    if (navigator.userAgent.includes('Mac')) {
      console.log('Mac');
      setOs('mac');
    } else if (navigator.userAgent.includes('Windows')) {
      console.log('Windows');
      setOs('windows');
    }
    console.log(navigator.userAgent);
  }, []);
  return (
    <html lang="en" className={`${os === 'windows' ? 'windows' : 'mac'}`}>
      <body className={inter.className}>
        <KakaoScript />
        <div id="modal-root" />
        <AntdRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
