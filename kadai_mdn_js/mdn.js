const date1 = new Date();

const year = date1.getFullYear();
const month = date1.getMonth() + 1;
const day = date1.getDate();

const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);