import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(orders);

  const handleClick = async () => {
    setLoading(true);
    await createNewOrder();
  }

  const createNewOrder = () => {
    let token = "1234abcd";
    // .post('http://localhost:3030/api/create_order', {name: "Syamsul", content: "Testing Order", userId: 1}, {headers: {'content-type': 'application/json', accept: 'application/json'}})
    return axios({
        method: 'post',
        url: 'http://localhost:3030/api/create_order',
        data: {name: "Syamsul", content: "Testing Order", userId: 1},
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
          accept: 'application/json'
        }
      })
      .then(newOrder => {
        setOrders(orders.concat(newOrder.data));
        setLoading(false);
      })
      .catch(error => {console.log(error)});
  }

  useEffect(() => {
    let token = "1234abcd";
    axios({
      method: 'get',
      url: 'http://localhost:3030/api/get_orders',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        accept: 'application/json'
      }
    })
    .then(orders => {
      setOrders(orders.data);
    })
    .catch(error => {console.log(error)});
  }, [])

  const getStatusColor = (status) => {
    if (status === 'declined') {
      return 'red';
    }
    else {
      return 'green';
    }
  }

  const renderTableContent = () => {
    return (
      <React.Fragment>
        {orders.map((order, index) => (
          <TableRow hover key={`table-row-${order.id}`}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.content}</TableCell>
            <TableCell><span style={{ color: `${getStatusColor(order.status)}` }}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></TableCell>
            <TableCell>{moment(order.createdAt).format('Do MMMM YYYY')}</TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    )
  }

  return (
    <div style={{ margin: `50px` }}>
      <div style={{ textAlign: `left` }}>
        <Typography component="h2" variant="h5" color="secondary" gutterBottom>
          Create New Order
        </Typography>
        <Button onClick={handleClick} variant="contained" color="primary">
          Generate New Order
        </Button>
      </div>
      <div style={{ marginTop: 50 }}>
        <div style={{ display: `${loading ? 'block' : 'none'}` }}>
          <CircularProgress />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderTableContent()}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Home;
