import StatisticsItem from "../StatisticsItem/StatisticsItem";
import useFilteredData from "../../hooks/useFilteredData";

const AllStatistics = () => {
  const AllStatisticsData = useFilteredData("statistics");
  return (
    <section className="statistics">
      <div className="statistics__wrapper">
        {AllStatisticsData?.map((statistics) => (
          <StatisticsItem key={statistics.id} {...statistics} />
        ))}
      </div>
    </section>
  );
};

export default AllStatistics;
