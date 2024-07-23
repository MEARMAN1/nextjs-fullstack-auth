import './globals.css'


export const metadata = {
  title: 'MUSIC SCHOOL',
  description: 'Join us for the best way to learn music',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white bg-black">
        {children}
        </body>
    </html>
  )
}
