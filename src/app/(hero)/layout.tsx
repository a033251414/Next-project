import Header from "../components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute w-full z-10">
        <Header></Header>
      </div>
      {children}
    </>
  );
}
