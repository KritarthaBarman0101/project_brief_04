import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Restaurant Ordering System</h1>

        <p>
          Main content area of the application.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;