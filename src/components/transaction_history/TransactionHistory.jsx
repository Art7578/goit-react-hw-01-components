import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.head}>
          <th className={css.tr}>Type</th>
          <th className={css.tr}>Amount</th>
          <th className={css.tr}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.rows}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.type}>{item.type}</td>
            <td className={css.amount}>{item.amount}</td>
            <td className={css.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.protoTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionHistory;
