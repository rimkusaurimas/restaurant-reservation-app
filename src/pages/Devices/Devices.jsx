import React, { useEffect, useState } from "react";

import {
  BreadCrumbs,
  PageContainer,
  Search,
  PaginatedResults,
} from "components";

import { useAPI } from "features";

import styles from "./Devices.module.scss";

export const Devices = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [{ data }, getData] = useAPI();

  useEffect(() => {
    getData("devices");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSearchResults = (input) => {
    const searchInput = input.toUpperCase();
    const filteredDevices = data.devices.deviceList.filter(
      (device) => device.name.toUpperCase().indexOf(searchInput) > -1
    );
    setSearchResults(filteredDevices);
  };

  return (
    <PageContainer>
      <BreadCrumbs />
      <h1 className={styles.sectionHeading}>Device reservations</h1>
      <Search handleSearch={getSearchResults} />
      <PaginatedResults itemsPerPage={6} searchResults={searchResults} />
    </PageContainer>
  );
};
