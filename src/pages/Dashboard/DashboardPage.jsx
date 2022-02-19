import React, { useEffect } from "react";
import {
  HelloWidget,
  ReservationsWidget,
  EatOutSection,
  PageContainer,
  WeatherWidget,
  Spinner,
  NewsAndStoriesSections,
} from "components";
import { useAPI } from "features/context/APIContext";
import styles from "./DashboardPage.module.scss";

export const DashboardPage = () => {
  const [{ data, isLoading }, getData] = useAPI();

  useEffect(() => {
    getData("userData", "restaurants", "weather", "stories");
  }, []); // eslint-disable-line

  const weekDayFull = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date().getDay());

  const weatherToday = data.weather?.find(
    (weatherObj) => weatherObj.weekDay === weekDayFull
  );

  return (
    <PageContainer>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <section className={styles.dashboardSection}>
            <HelloWidget />
            {data.weather && <WeatherWidget data={weatherToday} />}
          </section>
          <section className={styles.dashboardSection}>
            <ReservationsWidget data={{ userData: data.userData }} />
          </section>
          <section className={styles.dashboardSection}>
            <EatOutSection data={data} />
          </section>
          <section>
            <NewsAndStoriesSections stories={data.stories} />
          </section>
        </>
      )}
    </PageContainer>
  );
};
