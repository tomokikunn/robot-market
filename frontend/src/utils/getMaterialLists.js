import _ from "lodash";
const getMaterialLists = (data) => {
  const groupedData = _.groupBy(data, (item) => item.material);
  const lists = Object.keys(groupedData);
  return lists;
};

export { getMaterialLists };
