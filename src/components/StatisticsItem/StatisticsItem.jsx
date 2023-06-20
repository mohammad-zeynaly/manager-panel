const StatisticsItem = ({ title, counts, icon }) => {
  return (
    <div className="statistics-item">
      <div className="statistics-item__content-left">
        {icon}
        <div className="statistics-item__information">
          <span> {title} </span>
          <h6>{counts}</h6>
        </div>
      </div>
      <div className="statistics-item__content-right">
        <button className="statistics-item-icon__btn">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="statistics-item__arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StatisticsItem;
