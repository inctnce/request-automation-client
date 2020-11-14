import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List/List";
import React from "react";
import MyListItem from "./MyListItem";
import Option from "./Option/container";
import style from "../../../assets/styles/page.module.css";

type Props = {
  selected_option: number;

  setOption: (selected_option: number) => void;
};

const Account = (props: Props) => {
  return (
    <div>
      <h1 className={style.title}>Аккаунт</h1>
      <div className={style.wrapper}>
        <div className={style.side_wrapper}>
          <Paper className={style.side}>
            <List>
              <MyListItem
                isSelected={props.selected_option === 0 ? true : false}
                label="История"
                onClick={() => props.setOption(0)}
              />
              <MyListItem
                isSelected={props.selected_option === 1 ? true : false}
                label="Категории"
                onClick={() => props.setOption(1)}
              />
              <MyListItem
                isSelected={props.selected_option === 2 ? true : false}
                label="Товары"
                onClick={() => props.setOption(2)}
              />
            </List>
          </Paper>
        </div>
        <div className={style.main}>
          <Option />
        </div>
      </div>
    </div>
  );
};

export default Account;
