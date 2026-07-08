const express = require("express");
const cors = require("cors");
const yahooFinance = require("yahoo-finance2").default;

const app = express();
app.use(cors());

const PORT = 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Stocks route (dummy for now)
app.get("/stocks", async (req, res) => {
  try {
    const stocks = [
      {
        symbol: "AAPL",
        price: 182.45,
        change: 1.20,
        changePercent: "0.66%"
      },
      {
        symbol: "IBM",
        price: 148.32,
        change: -0.50,
        changePercent: "-0.33%"
      },
      {
        symbol: "MSFT",
        price: 320.10,
        change: 2.15,
        changePercent: "0.68%"
      },
      {
        symbol: "TSLA",
        price: 250.75,
        change: -3.10,
        changePercent: "-1.22%"
      }
    ];

    res.json(stocks);

  } catch (error) {
    res.status(500).json({ error: "Stock fetch failed" });
  }
});


// Chart route
app.get("/chart/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    // Dummy chart data (last 7 days)
    const chartData = [
      { date: "Mon", price: 180 },
      { date: "Tue", price: 185 },
      { date: "Wed", price: 178 },
      { date: "Thu", price: 190 },
      { date: "Fri", price: 195 },
      { date: "Sat", price: 188 },
      { date: "Sun", price: 200 },
    ];

    res.json(chartData);
  } catch (error) {
    res.status(500).json({ error: "Chart fetch failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
