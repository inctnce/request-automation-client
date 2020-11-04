import { createStyles, makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase/InputBase";
import { Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";


type Props = {
  className?: string;
  value: string;

  updFilter: (filterStr: string) => void;
  updFilterValue?: (filterStr: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width: 200,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--light_level_2)",
      display: "flex",
      flexDirection: "row",
    },
    searchIcon: {
      height: "100%",
      padding: theme.spacing(0, 2),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fill: "red",
    },
    inputRoot: {},
    inputInput: {},
  })
);

const Search = (props: Props) => {
  const classes = useStyles();
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color="action" />
      </div>
      <InputBase
        className={props.className}
        inputRef={search_ref}
        placeholder="Поиск..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default Search;
