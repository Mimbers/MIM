import Sidebar from "@/components/layout/sidebar/Sidebar";
import "../styles/global.css";

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
