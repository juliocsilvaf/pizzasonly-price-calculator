# 🍕 PizzasOnly – Price Calculator Web App

Academic project developed as part of the **Certificate IV in Information Technology (Programming)** at **TAFE NSW** (Sydney, Australia).

A client-side web application built with HTML and JavaScript that calculates the best price for pizza orders during a promotional period, based on a software requirements specification.

---

## 📋 Project Overview

**Client:** PizzasOnly
**Unit assessed:** ICTPRG440 – Apply Introductory Programming Skills in Different Languages

The application calculates the optimal price for a given number of pizzas using a promotional pricing structure, implementing input validation and a best-price algorithm in JavaScript.

---

## 💡 Business Rules (Requirements)

| Quantity | Price |
|----------|-------|
| 1 pizza | $6.45 |
| 2 pizzas | $12.00 |
| 3 pizzas | $14.00 |
| 4+ pizzas | Best combination of the above |

**Example:** 5 pizzas = 2 ($12.00) + 3 ($14.00) = **$26.00**

---

## 📁 Files

| File | Description |
|------|-------------|
| `order_form.html` | HTML form — user interface for pizza quantity input |
| `linked.js` | JavaScript — price calculation logic and input validation |

---

## ⚙️ How It Works

1. User enters the number of pizzas in the form
2. JavaScript validates the input (must be a positive number)
3. Algorithm calculates the best price using triplet grouping:
   - Groups of 3 → $14.00 each
   - Remainder of 1 → $6.45
   - Remainder of 2 → $12.00
4. Result is displayed dynamically on the page

---

## 🔍 JavaScript Logic

```javascript
// Groups pizzas into triplets for best price
triplets = Math.floor(quantity / 3);
remainder = quantity % 3;

// Calculates total based on remainder
price = triplets * 14.00 + (remainder === 1 ? 6.45 : remainder === 2 ? 12.00 : 0);
```

**Key concepts applied:**
- Input validation (`isNaN`, `parseInt`)
- Conditional logic (`if/else if/else`)
- Arithmetic operators and modulo (`%`, `Math.floor`)
- DOM manipulation (`getElementById`, `innerHTML`)
- Form handling (`onsubmit`, `return false`)
- Strict mode (`'use strict'`)

---

## 🛠️ Technologies

- **HTML5** – Form structure and page layout
- **JavaScript (ES6)** – Business logic and DOM interaction

---

## 🎓 Context

Completed as part of the unit ICTPRG440 — **Certificate IV in Information Technology (Programming)** at **TAFE NSW**, Sydney, Australia (2024).

---

*Julio Cesar da Silva Filho | [LinkedIn](https://www.linkedin.com/in/julio-cesar-filho-84241842/)*
