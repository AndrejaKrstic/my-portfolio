import React from "react";
import style from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={style.container}>{children}</div>;
}
