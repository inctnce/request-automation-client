import ListItem from "@material-ui/core/ListItem";
import React from "react";

type Props = {
  isSelected?: boolean;
  label: string;
  onClick?: any;
};

const MyListItem = (props: Props) => {
  return (
    <ListItem selected={props.isSelected} button onClick={props.onClick}>
      {props.label}
    </ListItem>
  );
};

export default MyListItem;
