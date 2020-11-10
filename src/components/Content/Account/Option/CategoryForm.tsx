import React from "react";
import style from "./style.module.css";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

type Props = {
  user_id: string;
  postCategory: (user_id: string, name: string) => void;
};

const CategoryForm = (props: Props) => {
  const categoryRef: React.RefObject<HTMLInputElement> = React.createRef();
  return (
    <Paper variant="outlined" className={style.option}>
      <Typography
        className={style.form_item + " " + style.heading}
        align="center"
      >
        Добавить категорию
      </Typography>
      <TextField
        className={style.form_item}
        required
        inputRef={categoryRef}
        label="Название"
        margin="normal"
      />
      <Button
        className={style.form_item}
        variant="contained"
        color="primary"
        disableElevation
        onClick={() =>
          props.postCategory(props.user_id, categoryRef.current!.value)
        }
      >
        Добавить
      </Button>
    </Paper>
  );
};

export default CategoryForm;