const reducer = (prev, crr) => {
  return prev + crr;
};
const nums = [1, 2, 3, 4, 5];
const chars = ["a", "b", "x", "e"];

console.log(nums.reduce(reducer, 0));
console.log(chars.reduce(reducer));

//---------------------------------
function redux(state, action) {
  switch (action.type) {
    case "changed title":
      return {
        ...state,
        title: action.payload.title,
        income: action.payload.income,
      };

    case "employee promoted":
      return {
        ...state,
        income: action.payload.income,
        wasPromoted: true,
      };

    default:
      console.log("error");
  }
}

const currState = {
  title: "biller",
  income: 55000,
  wasPromoted: false,
};
const newState = redux(currState, {
  type: "changed title",
  payload: {
    title: "manager",
    income: 80000,
  },
});

console.log(currState);
console.log(newState);
