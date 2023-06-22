import useFilteredData from "../../hooks/useFilteredData";

const UsersStatistics = () => {
  const usersStatisticsData = useFilteredData("usersStatistics");

  return (
    <section className="users-statistics">
      <div className="users-statistics__wrapper">
        {usersStatisticsData?.map((statistics) => (
          <div key={statistics.id} className="users-statistics-item">
            <div className="users-statistics-item__left">
              <div className="users-statistics-item__icon">
                <span className={statistics.iconClass}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`users-statistics__icon ${statistics.iconClass}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </span>
                <h6 className={statistics.iconClass}>Active Users</h6>
              </div>
              <h5 className="users-statistics__count ">10.8k</h5>
            </div>
            <div className="users-statistics-item__right">
              <span
                className={`users-statistics-item__percent ${statistics.iconClass}`}
              >
                + 21 %
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersStatistics;
