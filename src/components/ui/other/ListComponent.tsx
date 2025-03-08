import React from "react";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const ListComponent = <T,>({ data, renderItem }: ListProps<T>) => {
  return <>{data.map((item, index) => renderItem(item, index))}</>;
};

export default ListComponent;
