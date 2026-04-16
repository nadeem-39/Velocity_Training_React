"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// data
const orders = [
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
// Re-type ALL functions from Exercise 1D with proper TypeScript signatures. No 'any' types.
// 1. getOrderTotal(order) — returns the total cost of an order (sum of price * qty for each item). Use .reduce().
const getOrderTotal = (order) => {
    let totalCost = order?.items?.reduce((cost, ele) => {
        return cost + ele?.price * ele?.qty;
    }, 0);
    return totalCost;
};
// 2. getDeliveredOrders(orders) — returns only orders with status "delivered". Use .filter().
const getDeliveredOrders = (orders) => {
    let deliveredOrders = orders?.filter((ele) => ele?.status == "delivered");
    return deliveredOrders;
};
// 3. getCustomerNames(orders) — returns unique customer names, excluding null. Use .map(), .filter(), and spread with Set.
const getCustomerNames = (orders) => {
    let costumerWithoutNull = orders?.filter((ele) => ele?.customer);
    let onlyCustomerName = costumerWithoutNull?.map((ele) => ele.customer);
    let uniqueNames = [...new Set(onlyCustomerName)];
    return uniqueNames;
};
// 4. getOrderSummaries(orders) — returns an array of objects: { id, customer (use "Unknown" if null), total, status }.
// Use .map() and call getOrderTotal.
const getOrderSummaries = (orders) => {
    let orderSummaries = orders?.map((ele) => ({
        id: ele?.id,
        customer: ele?.customer ? ele?.customer : "Unknown",
        total: getOrderTotal(ele),
        status: ele?.status,
    }));
    return orderSummaries;
};
// 5. getTotalRevenue(orders) — returns the total revenue from delivered orders only. Use .filter() then .reduce().
const getTotalRevenue = (orders) => {
    let deliveredOrders = getDeliveredOrders(orders);
    let totalRevenue = deliveredOrders?.reduce((revenue, ele) => revenue + getOrderTotal(ele), 0);
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
const sortByDate = (orders) => {
    let sortedOrders = orders?.sort((order1, order2) => {
        if (order1?.date < order2?.date)
            return 1;
        return 1;
    });
    return sortedOrders;
};
//# sourceMappingURL=Type_the_Order_Data.js.map