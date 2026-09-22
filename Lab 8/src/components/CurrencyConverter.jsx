import React, { useState } from "react";

// Fixed demo rate — in a real app you'd fetch this from an FX API.
const USD_TO_EUR_RATE = 0.92;

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const handleAmountChange = (e) => {
    // Only allow numbers / decimals, ignore junk input
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
    const num = parseFloat(amount);
    if (isNaN(num)) return "0.00";

    if (fromCurrency === toCurrency) return num.toFixed(2);

    if (fromCurrency === "USD" && toCurrency === "EUR") {
      return (num * USD_TO_EUR_RATE).toFixed(2);
    }
    // EUR -> USD
    return (num / USD_TO_EUR_RATE).toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Currency Converter</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Amount
        </label>
        <input
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-3">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <button
          type="button"
          onClick={handleSwap}
          title="Swap currencies"
          className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
        >
          ⇄
        </button>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="bg-slate-50 rounded-lg p-4 text-center">
        <p className="text-sm text-slate-500">Converted amount</p>
        <p className="text-2xl font-bold text-blue-600">
          {convert()} {toCurrency}
        </p>
      </div>

      <p className="text-xs text-slate-400 text-center">
        Rate used: 1 USD = {USD_TO_EUR_RATE} EUR (demo/static rate)
      </p>
    </div>
  );
}

export default CurrencyConverter;
