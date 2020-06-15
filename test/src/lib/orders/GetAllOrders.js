const GetAllOrders = (req, res) => {
  let a = 'ayam';
  let b = 'blalala';

  const combine = (a, b) => {
    return `${a} ${b}`;
  }

  return res.send(combine("kambing", "itu sedap ke?"));
}

module.exports = { GetAllOrders };
