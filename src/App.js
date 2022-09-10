import "./App.css";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="h-auto">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}
