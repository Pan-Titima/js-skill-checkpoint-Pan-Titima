// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
const newItem = {id:5,task:"Walk the dog"};
userTaskList.push(newItem);
const foundItem = userTaskList.filter(x => x.id == 4);
console.log(foundItem)
for(let item of foundItem){
  item.task = "Go to the gym";
}
console.log(userTaskList);
userTaskList.pop();
let lastItem = userTaskList[userTaskList.length-1];
console.log(`Task id: ${lastItem.id}, ${lastItem.task}`);
