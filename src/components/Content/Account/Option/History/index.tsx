import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Edit from "@material-ui/icons/Edit";
import React from "react";
import style from "./style.module.css";
import Category from "../../../../../types/Category";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CategoryForm from "../../../../Forms/CategoryForm/index";
import Alert from "../../../../../types/Alert";
import ProductForm from "../../../../Forms/ProductForm";
import DemandForm from "../../../../Forms/DemandForm";
import Demand from "../../../../../types/Demand";
import Product from "../../../../../types/Product";

type Props = {
  categories: Category[];

  items: any;
  itemsType: "category" | "product" | "demand";

  user_id?: string;

  request: "post" | "put";

  putCategory?: (user_id: string, name: string) => void;

  updNumOfRows?: (action: "increase" | "decrease") => void;
  updTable?: (type: "spec" | "setting", index: number, value: string) => void;
  updForm?: (segment: string, key: number, value: string) => void;
  putProduct?: (product: Product) => void;

  postDemand?: (demand: Demand) => void;
  updDemandForm?: (key: number, value: string) => void;

  alert?: (alert: Alert) => void;
};

const History = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  function setModalBody(): JSX.Element {
    switch (props.itemsType) {
      case "category":
        return <CategoryForm creator_id={props.user_id!} postCategory={props.putCategory!} alert={props.alert!} />;

      case "product":
        return (
          <ProductForm
            categories={props.categories}
            product={props.items[index]}
            request={props.request}
            submitBtnTitle="Обновить"
            formTitle="Обновить товар"
            updNumOfRows={props.updNumOfRows!}
            updTable={props.updTable!}
            updForm={props.updForm!}
            putProduct={props.putProduct!}
          />
        );

      case "demand":
        return (
          <DemandForm
            demand={props.items[index]}
            creator_id={props.user_id!}
            postDemand={props.postDemand!}
            updForm={props.updDemandForm!}
            formTitle="Изменить заявку"
            submitBtnTitle="Изменить"
            alert={props.alert!}
          />
        );
    }
  }

  return (
    <div>
      <Paper variant="outlined" className={style.form}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Изменить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((category: Category, i: number) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.creation_date}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setOpen(true);
                      setIndex(i);
                    }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Modal
        className={style.modal_wrapper}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>{setModalBody()}</div>
        </Fade>
      </Modal>
    </div>
  );
};

export default History;
