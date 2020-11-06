import React from "react";
import style from "./style.module.css";

import CateogryForm from "./CategoryForm";

type Props = {
  className?: string;

  user_id: string;
  selected_option: number;
  postCategory: (user_id: string, name: string) => void;
};

const Option = (props: Props) => {
  if (props.selected_option === 0) {
    return <div className={style.option}>История</div>;
  }
  if (props.selected_option === 1) {
    return <CateogryForm user_id={props.user_id} postCategory={props.postCategory} />;
  }
  if (props.selected_option === 2) {
    return <div className={style.option}>Товары</div>;
  }
  return <></>;
};

export default Option;
