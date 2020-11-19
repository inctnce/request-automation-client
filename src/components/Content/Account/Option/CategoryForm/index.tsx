import React from "react";
import style from "./style.module.css";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import postCategory from "./helpers";

type Props = {
  user_id: string;
  postCategory: (user_id: string, name: string) => void;
};

const CategoryForm = (props: Props) => {
  const categoryRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className={style.form}>
      <Paper variant="outlined" className={style.form}>
        <Typography className={style.item + " " + style.heading} align="center">
          Добавить категорию
        </Typography>

        <TextField
          className={style.item}
          required
          inputRef={categoryRef}
          label="Название"
          margin="normal"
        />
        <Button
          className={style.item}
          variant="contained"
          color="primary"
          disableElevation
          onClick={() =>
            postCategory(
              props.user_id,
              categoryRef.current!.value,
              props.postCategory
            )
          }
        >
          Добавить
        </Button>
      </Paper>
    </div>
  );
};

export default CategoryForm;
