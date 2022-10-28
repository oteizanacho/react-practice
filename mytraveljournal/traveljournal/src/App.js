import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <div>
      <Header />
      <section className="card--wrapper">{cards}</section>
    </div>
  );
}
