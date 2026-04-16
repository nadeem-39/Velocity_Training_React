interface item {
  name: String;
  price: number;
  qty: number;
}

interface order {
  id: number;
  customer: String | null;
  items: item[];
  status: String;
  date: String;
}

const orders: order[] = [
  {
    id: 1,
    customer: "John",
    items: [
      { name: "Book", price: 20, qty: 2 },
      { name: "Pen", price: 5, qty: 10 },
    ],
    status: "delivered",
    date: "2025-01-15",
  },
  {
    id: 2,
    customer: "Jane",
    items: [{ name: "Laptop", price: 1000, qty: 1 }],
    status: "pending",
    date: "2025-03-01",
  },
  {
    id: 3,
    customer: "John",
    items: [
      { name: "Mouse", price: 25, qty: 1 },
      { name: "Keyboard", price: 75, qty: 1 },
    ],
    status: "delivered",
    date: "2025-02-10",
  },
  {
    id: 4,
    customer: "Alice",
    items: [{ name: "Monitor", price: 300, qty: 2 }],
    status: "cancelled",
    date: "2025-01-20",
  },
  { id: 5, customer: null, items: [], status: "pending", date: "2025-03-15" },
];

console.log(orders);
