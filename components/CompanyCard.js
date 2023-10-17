import React from "react";
import styles from "../pages/styles/job-id.module.css";
import Image from "next/image";
import useSWR from "swr";

export default function CompanyCard({ companyName }) {
  const { data, error } = useSWR(`/api/company/${companyName}`);
  if (error) return null;
  if (!data) return null;
  return (
    <div className={styles.companyCard}>
      <div className={styles.logoWrapper}>
        <Image src={data.logoImg} width={64} height={64} alt="Logo" />
      </div>
      <p>
        <strong>{data.companyName}</strong>
      </p>
      <a href={data.website}>{data.website}</a>
      <p>HQ: {data.location}</p>
    </div>
  );
}
