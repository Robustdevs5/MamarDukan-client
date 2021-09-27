import {
  DirectionsRun,
  Forum,
  LoopOutlined,
  Payment,
  Redeem,
} from "@mui/icons-material";
import React from "react";
import styles from "../StyledComponent/Policies.module.css";
import { policies } from "./PolicyData";

export const Policies = () => {
  return (
    <div className={styles.policies_main_box}>
      {policies.map((policy) => (
        <div className={styles.policies_sub_box}>
          <div className={styles.policies_icon}>
            {policy.icon === "directionsrun" ? (
              <DirectionsRun style={{ fontSize: "45px" }} />
            ) : policy.icon === "loop" ? (
              <LoopOutlined style={{ fontSize: "45px" }} />
            ) : policy.icon === "payment" ? (
              <Payment style={{ fontSize: "45px" }} />
            ) : policy.icon === "forum" ? (
              <Forum style={{ fontSize: "45px" }} />
            ) : policy.icon === "redeem" ? (
              <Redeem style={{ fontSize: "45px" }} />
            ) : (
              <Redeem style={{ fontSize: "45px" }} />
            )}
          </div>
          <h6 className={styles.policies_title}>{policy.title}</h6>
          <p className={styles.policies_details}>{policy.details}</p>
        </div>
      ))}
    </div>
  );
};
