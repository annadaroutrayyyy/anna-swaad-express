// SWAAD EXPRESS PAYMENT OPTIONS (PayKaro is our payment partner)
// RULE 3: the payment screen must offer UPI and Card.
const PAYMENT_NOTE = "100% safe & encrypted payments powered by PayKaro.";

const PAYMENT_METHODS = [
  { id: "upi",  label: "UPI",  hint: "GPay, PhonePe, Paytm or any UPI app" },
  { id: "card", label: "Card", hint: "Debit or credit card" }
];

if (typeof module !== "undefined") module.exports = { PAYMENT_NOTE, PAYMENT_METHODS };
