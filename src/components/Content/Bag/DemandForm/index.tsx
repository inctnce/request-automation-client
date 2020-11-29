import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import React from "react";
import style from "./style.module.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Demand from "../../../../types/Demand";

type Props = {
  demand: Demand;
  creator_id: string;

  postDemand: (demand: Demand) => void;
  updForm: (key: number, value: string) => void;
};

const DemandForm = (props: Props) => {
  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const costRef: React.RefObject<HTMLInputElement> = React.createRef();
  const deadlinesRef: React.RefObject<HTMLInputElement> = React.createRef();
  const addressRef: React.RefObject<HTMLInputElement> = React.createRef();
  const financingRef: React.RefObject<HTMLInputElement> = React.createRef();
  const contactRef: React.RefObject<HTMLInputElement> = React.createRef();
  const responsibleRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div>
      <Paper className={style.form}>
        <Typography className={style.item} align="center" variant="h6">
          Отправление заявки
        </Typography>
        <TextField
          onChange={() => props.updForm(0, nameRef.current!.value)}
          inputRef={nameRef}
          value={props.demand.name}
          className={style.item}
          label="название"
        />
        <TextField
          onChange={() => props.updForm(1, costRef.current!.value)}
          inputRef={costRef}
          value={props.demand.total_cost}
          className={style.item}
          label="максимальная стоимость"
        />
        <TextField
          onChange={() => props.updForm(2, deadlinesRef.current!.value)}
          inputRef={deadlinesRef}
          value={props.demand.deadlines}
          className={style.item}
          label="сроки"
        />
        <TextField
          onChange={() => props.updForm(3, addressRef.current!.value)}
          inputRef={addressRef}
          value={props.demand.address}
          className={style.item}
          label="адрес"
        />
        <TextField
          onChange={() => props.updForm(4, financingRef.current!.value)}
          inputRef={financingRef}
          value={props.demand.financing_source}
          className={style.item}
          label="источник финансирования"
        />
        <TextField
          onChange={() => props.updForm(5, contactRef.current!.value)}
          inputRef={contactRef}
          value={props.demand.contact_person}
          className={style.item}
          label="контактное лицо"
        />
        <TextField
          onChange={() => props.updForm(6, responsibleRef.current!.value)}
          inputRef={responsibleRef}
          value={props.demand.responsible_person}
          className={style.item}
          label="ответственное лицо"
        />
        <Button
          className={style.item}
          variant="contained"
          color="primary"
          disableElevation
          onClick={() =>
            props.postDemand({
              name: props.demand.name,
              total_cost: props.demand.total_cost,
              deadlines: props.demand.deadlines,
              address: props.demand.address,
              financing_source: props.demand.financing_source,
              contact_person: props.demand.contact_person,
              responsible_person: props.demand.responsible_person,
              products: props.demand.products,
              creator_id: props.creator_id,
            })
          }
        >
          Отправить
        </Button>
      </Paper>
    </div>
  );
};

export default DemandForm;
