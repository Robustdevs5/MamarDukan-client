import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div class={styles.policies_main_box}>
      {policies.map((policy) => (
        <div class={styles.policies_sub_box}>
          <div class={styles.policies_icon}>
            {policy.icon === "directionsrun" ? (
              <DirectionsRun fontSize="large" />
            ) : policy.icon === "loop" ? (
              <LoopOutlined fontSize="large" />
            ) : policy.icon === "payment" ? (
              <Payment fontSize="large" />
            ) : policy.icon === "forum" ? (
              <Forum fontSize="large" />
            ) : policy.icon === "redeem" ? (
              <Redeem fontSize="large" />
            ) : (
              <Redeem fontSize="large" />
            )}
          </div>
          <h6 class={styles.policies_title}>{policy.title}</h6>
          <p className={styles.policies_details}>{policy.details}</p>
        </div>
      ))}
    </div>
  );
};
