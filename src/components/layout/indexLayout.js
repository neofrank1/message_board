import AppHeader from "../header/appHeader";
import AppFooter from "../footer/appFooter";

export default function IndexLayout({ children }) {
  return (
    <>
      <AppHeader />
        <main className="max-w-full mx-auto min-h-screen max-h-full bg-base-100 border-t border-transparent">
            {children}
        </main>
      <AppFooter />
    </>
  );
}