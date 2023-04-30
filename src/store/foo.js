const arr = [
  {
    desc: "foo1",
  },
  { desc: "foo2" },
];

console.log(arr);

const newArr = [...arr, { desc: "foo3" }];

console.log(newArr);

const foo = newArr.filter((e) => e.desc !== "foo1");

console.log(foo);
