import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // const noLayoutRoutes = ["/auth/login", "/auth/signup"];
  // const isAuthRoute = noLayoutRoutes.includes(router.pathname);
  
  const isAuthRoute =
    router.pathname.startsWith("/auth") ||
    router.pathname.startsWith("/onboarding");


  return (
    <div className={`page-wrapper ${roboto.className}`}>
      {isAuthRoute ? (
        
      <Component {...pageProps} />
      ) : (
       
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
           
            <div className="main-wrapper bg-pink">
               <Header />
                <main>
                 <div className="container-fluid px-6 py-4">
                   <Component {...pageProps} />
                 </div>
                </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
