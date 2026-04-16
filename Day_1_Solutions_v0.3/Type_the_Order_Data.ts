// 1. Define an OrderItem interface: { name: string, price: number, qty: number }
interface OrderItem {
  name: string;
  price: number;
  qty: number;
}

// 2. Define an OrderStatus type: 'pending' | 'delivered' | 'cancelled'

type OrderStatus = "pending" | "delivered" | "cancelled";

// 3. Define an Order interface using OrderItem and OrderStatus. Customer can be string or null.

interface Order {
  id: number;
  customer: string | null;
  items: OrderItem[];
  status: OrderStatus;
  date: string;
}

// data
const orders: Order[] = [
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

// 4. Define CreateOrderInput using Omit<Order, 'id'> — do not write the fields again manually.

type CreateOrderInput = Omit<Order, "id">;

// 5. Define OrderSummary: { id: number, customer: string, total: number, status: OrderStatus }

interface OrderSummary {
  id: number;
  customer: string;
  total: number;
  status: OrderStatus;
}

// 6. Define a generic type ApiResponse<T> = { data: T, meta: { total: number, page: number, pageSize: number } }

type ApiResponse<T> = {
  data: T;
  meta: { total: number; page: number; pageSize: number };
};

// Re-type ALL functions from Exercise 1D with proper TypeScript signatures. No 'any' types.

// 1. getOrderTotal(order) — returns the total cost of an order (sum of price * qty for each item). Use .reduce().

const getOrderTotal = (order: Order): number => {
  let totalCost: number = order?.items?.reduce(
    (cost: number, ele: OrderItem) => {
      return cost + ele?.price * ele?.qty;
    },
    0,
  );
  return totalCost;
};

// 2. getDeliveredOrders(orders) — returns only orders with status "delivered". Use .filter().

const getDeliveredOrders = (orders: Order[]): Order[] => {
  let deliveredOrders: Order[] = orders?.filter(
    (ele: Order) => ele?.status == "delivered",
  );
  return deliveredOrders;
};

// 3. getCustomerNames(orders) — returns unique customer names, excluding null. Use .map(), .filter(), and spread with Set.

const getCustomerNames = (orders: Order[]): (String | null)[] => {
  let costumerWithoutNull: Order[] = orders?.filter(
    (ele: Order) => ele?.customer,
  );
  let onlyCustomerName: (String | null)[] = costumerWithoutNull?.map(
    (ele: Order): String | null => ele.customer,
  );
  let uniqueNames: (String | null)[] = [...new Set(onlyCustomerName)];
  return uniqueNames;
};

// 4. getOrderSummaries(orders) — returns an array of objects: { id, customer (use "Unknown" if null), total, status }.
// Use .map() and call getOrderTotal.

const getOrderSummaries = (orders: Order[]): OrderSummary[] => {
  let orderSummaries: OrderSummary[] = orders?.map((ele: Order) => ({
    id: ele?.id,
    customer: ele?.customer ? ele?.customer : "Unknown",
    total: getOrderTotal(ele),
    status: ele?.status,
  }));
  return orderSummaries;
};

// 5. getTotalRevenue(orders) — returns the total revenue from delivered orders only. Use .filter() then .reduce().

const getTotalRevenue = (orders: Order[]): number => {
  let deliveredOrders: Order[] = getDeliveredOrders(orders);
  let totalRevenue: number = deliveredOrders?.reduce(
    (revenue, ele) => revenue + getOrderTotal(ele),
    0,
  );
  return totalRevenue;
};

// 6. getCustomerSpending(orders) —
// returns an object: { "John": 140, "Jane": 0, "Alice": 0 } showing how much each customer spent on delivered orders.
// Use .reduce(). Handle null customer.

// const getCustomerSpending = (orders: Order[]):Record<string,number> => {
//   type currObjeType= Record<string,number>;
//   let newOrders: currObjeType = orders.reduce((acc:currObjeType, ele:Order) => {
//     if (!ele?.customer) return acc;
//     if (!acc[ele.customer]) acc[ele.customer] = 0;
//     if (ele?.status != "delivered") return acc;
//     acc[ele?.customer ?? 'unknow'] = acc[ele?.customer ?? 'unkonw'] + getOrderTotal(ele);
//     return acc;
//   },{});
//   return newOrders;
// };

// 7. sortByDate(orders) — returns orders sorted newest first. Use .sort() with Date comparison.

const sortByDate = (orders: Order[]): Order[] => {
  let sortedOrders: Order[] = orders?.sort((order1, order2) => {
    if (order1?.date < order2?.date) return 1;
    return 1;
  });
  return sortedOrders;
};
