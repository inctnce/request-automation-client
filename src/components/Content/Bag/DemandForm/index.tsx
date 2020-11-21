import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import React from "react";
import style from "./style.module.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DemandForm = () => {
  return (
    <div>
      <Paper className={style.form}>
        <Typography className={style.item} align="center" variant="h6">
          Отправление заявки
        </Typography>
        <TextField className={style.item} label="название" />
        <TextField className={style.item} label="максимальная стоимость" />
        <TextField className={style.item} label="сроки" />
        <TextField className={style.item} label="адрес" />
        <TextField className={style.item} label="источник финансирования" />
        <TextField className={style.item} label="контактное лицо" />
        <TextField className={style.item} label="ответственное лицо" />
        <Button
          className={style.item}
          variant="contained"
          color="primary"
          disableElevation
        >
          Отправить
        </Button>
      </Paper>
    </div>
  );
};

export default DemandForm;
