# order-portal

This is a simple nodeJS project with ReactJS as SPA on the client-side. The
`orders` and `payment` act as a microservices using NodeJS with ExpressJS
framework. The `order-operations-portal` project is a ReactJS SPA project that
act as the client-side app to create the order.

### Process Flows
- Order portal will request to create a new order from the `orders` server
- `orders` server will communicate with `payment` server to process the order status
- Order portal will call the order data from the `orders` server and show a
  list of available orders

How to setup everything

### Orders
```
cd orders
yarn install
sequelize db:migrate # create new table on postgres
yarn start # localhost:3030 endpoint
```

### Payment
```
cd payment
yarn install
yarn start # localhost:3075 endpoint
```

### Order Portal
```
cd order-operations-portal
yarn install
yarn start # goto localhost:3000
```
