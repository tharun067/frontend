
import Footer from "@/components/Footer";
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
        <main>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </main>
        {/*<footer className="flex text-end items-end mb-0">
          <Footer />
        </footer>*/}
      </body>
    </html>
  );
}
