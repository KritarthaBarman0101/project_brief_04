import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  const handleOrder = () => {
    alert("Order button clicked!");
  };

  return (
    <div>
      <h1>Restaurant Ordering System</h1>

      <Button onClick={handleOrder}>
        Order Now
      </Button>

      <Card
        title="Today's Special"
        description="Enjoy our special dishes today."
      >
        <p>Fresh and delicious food available now.</p>
      </Card>
    </div>
  );
}

export default Home;