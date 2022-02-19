import React, { useEffect } from "react";
import { PageContainer } from "components/PageContainer";
import { BreadCrumbs } from "components/Breadcrumbs";

import { useAPI } from "features";

export const ReservationsPage = () => {
  const [, getData, ,] = useAPI();

  useEffect(() => {
    getData("rooms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <BreadCrumbs />
      <h1>Coming soon</h1>
    </PageContainer>
  );
};
