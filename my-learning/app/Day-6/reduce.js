const axios = require("axios");

// Example 1
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (users) => {
  const result = users.reduce((acc, user) => {
    acc = {
      ...acc,
      [user.id]: user,
    };

    return acc;
  }, {});
  return result;
};

let usersById = groupById(users);

console.log(usersById);

// Example 2
const total = (arr) => {
  return arr.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
};

console.log(`Total : ${total([1, 2, 3])}`);

// Example 3
const stringConcat = (arr) => {
  return arr.reduce((acc, ele) => {
    return acc + ele.toString();
  }, "");
};

console.log(stringConcat([1, 2, 3]));

// Example 4
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const totalVotes = (arr) => {
  // using reduce
  return arr.reduce((acc, ele) => {
    // ele is object;
    if (ele.voted) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  // // using filter
  // return arr.filter( (ele) => ele.voted).length
};

console.log(totalVotes(voters));

// Example 5
/**
 * Given an array of all your wishlist items, figure out how
 * much it would cost to just buy everything at once
 */

function shoppingSpree(arr) {
  return arr.reduce((acc, ele) => {
    return acc + ele.price;
  }, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

// Exmaple 6
/**
 * Given an array of arrays, flatten them into a single array
 */

function flatten(arr) {
  // your code here
  return arr.reduce((acc, ele) => {
    // console.log(acc.push(...ele));
    // console.log(acc.concat(...ele));

    return acc.concat(ele);
  }, []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// Exmaple 7
/**
 * Given an array of potential voters, return an object representing
 * the results of the vote
 */

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  // your code here
  return arr.reduce(
    (acc, ele) => {
      if (ele.age <= 25 && ele.age >= 18) {
        if (ele.voted) {
          acc.numYoungVotes += 1;
        }
        acc.numYoungPeople += 1;
      } else if (ele.age >= 26 && ele.age <= 35) {
        if (ele.voted) {
          acc.numMidVotesPeople += 1;
        }
        acc.numMidsPeople += 1;
      } else if (ele.age >= 36 && ele.age <= 55) {
        if (ele.voted) {
          acc.numOldVotesPeople += 1;
        }
        acc.numOldsPeople += 1;
      }

      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

console.log(voterResults(voters));

// Example 8
/**
 * Using AJAX, do a GET request to your own Github repositories endpoint.
 * The URL will be https://api.github.com/users/<YOUR_GITHUB_USERNAME_HERE>/repos.
 * Once you get the data, use .reduce() to figure out how many watchers
 * you have across all of your repositories
 */

const getWatchers = async (githubUsername) => {
  const response = await axios.get(
    `https://api.github.com/users/${githubUsername}/repos`
  );

  return response.data.reduce((acc, repo) => {
    return acc + repo.watchers;
  }, 0);
};

(async () => {
  console.log(await getWatchers("Rishiii7"));
})();

// Example 9
function add() {
  // console.log(...arguments);
  return [...arguments].reduce((acc, ele) => {
    // console.log(ele);
    return acc + ele;
  }, 0);
}

console.log(add(1, 2, 4, 6, 7, 8));
