/**
    formatCurrency.js

    @author:
      - Derek Johnston

    @desc:
      - Take in a number and return a formatted currency string.

    @param:
      - amount (Number): The number value of the currency amount.

    @return:
      - (String): The formatted curency string.
*/
function formatCurrency(amount) {
  return "$" + (amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

export default formatCurrency;
