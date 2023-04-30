import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(data => (
          <li key={data.id} className={css.item}>
            <span className={css.stat_label}>{data.label} </span>
            <span className={css.stat_percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
