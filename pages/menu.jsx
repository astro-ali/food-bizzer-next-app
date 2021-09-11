import Categories from "../components/Categories";
import Header from "../components/Header";
import AddNewOrder from "../components/AddNewOrder";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <AddNewOrder />
    </div>
  );
}
