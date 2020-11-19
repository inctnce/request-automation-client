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

type Props = {
  items: any;
};

const History = (props: Props) => {
  return (
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
          {props.items.map((category: Category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.creation_date}</TableCell>
              <TableCell>
                <IconButton>
                  <Edit />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default History;
