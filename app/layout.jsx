
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/global.css";


export const metadata = {
  title: "Career Guidance",
  description: "AI powered Career Guidance and path Seeker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
