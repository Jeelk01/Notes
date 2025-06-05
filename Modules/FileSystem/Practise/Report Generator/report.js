const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sales.csv');

function logTableReport(caption, head, data) {
  console.log(`\n* * * * * ${caption} * * * * * \n`);
  
  const totals = {};

  for (let line of data) {
    const [date, product, quantityStr, priceStr] = line.split(',');
    const quantity = parseInt(quantityStr, 10);
    const price = parseFloat(priceStr);

    if (isNaN(quantity) || isNaN(price)) {
      console.warn(`Skipping invalid data line: ${line}`);
      continue;
    }

    const revenue = quantity * price;

    if (!totals[product]) {
      totals[product] = { quantity: 0, revenue: 0 };
    }

    totals[product].quantity += quantity;
    totals[product].revenue += revenue;
  }

  console.log(`Product   | Total Sold | Revenue`);
  console.log(`---------------------------------`);

  for (const [product, stats] of Object.entries(totals)) {
    console.log(
      `${product.padEnd(10)}| ${String(stats.quantity).padStart(10)} | Ru.${stats.revenue.toFixed(2).padStart(7)}`
    );
  }
}

fs.readFile(filePath, (err, buffer) => {
  if (err) {
    console.log("Error reading file : ", err);
    return;
  }
  const [header, ...data] = buffer.toString().trim().split('\n');
  const columnHead = header.split(',');
  logTableReport('Sales Report', columnHead, data);
});
