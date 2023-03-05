import "../styles/global.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <Sidebar />
      <div>{children}</div>
      </body>
    </html>
  );
}
