import style from './StatisticsItem.module.css';

const StatisticsItem = ({ item, Icon }) => {
  return (
    <>
      <Icon size="24" />
      <span className={style.counter}>{item.total}</span>
      <p className={style.text}>{item.title}</p>
    </>
  );
};

export default StatisticsItem;
