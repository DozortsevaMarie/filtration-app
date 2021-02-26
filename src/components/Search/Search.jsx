import React, {useEffect} from "react";
import { Button, Input } from "antd";
import style from "./Serch.module.css";

const Search = ({ value, setTableData, items, setTotalItemsCount, setValue }) => {
    const handleSearchClick = (e) => {
        setValue(e.currentTarget.value);
    };
    useEffect(() => {
        if (value === "") {
            setTableData(items);
            setTotalItemsCount(items.length);
        } else {
            const newTData = items.filter(
                (item) =>
                    Object.values(item).toString().toLowerCase().includes(value) ||
                    Object.values(item.address).some((address) =>
                        address.toString().toLowerCase().includes(value)
                    )
            );
            setTableData(newTData);
            setTotalItemsCount(newTData.length);
        }
    }, [value]);

  return (
    <div className={style.search}>
      <Input
        placeholder="Find an item"
        onChange={handleSearchClick}
        value={value}
      />
      <Button type="primary"
              onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default Search;
