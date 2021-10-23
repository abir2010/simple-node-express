const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi bro trying hard? haha. best of luck !!!!");
});

const users = [
  {
    id: 1,
    name: "Shabana Graham",
    username: "Shabana",
    email: "Shabana@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "shrabonti",
    username: "shrabonti",
    email: "shrabonti@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 3,
    name: "soniya",
    username: "soniya",
    email: "soniya@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 4,
    name: "shuchorita",
    username: "shuchorita",
    email: "shuchorita@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 5,
    name: "shorna",
    username: "shorna",
    email: "shorna@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 6,
    name: "shamanta",
    username: "shamanta",
    email: "shamanta@gmail.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //   res.send(search);
  if (search) {
    const user = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(user);
  } else {
    res.send(users);
  }
});

// app.METHOD -> app.post
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log("hit post",req.body);
  res.json(newUser);
})

app.get("/users/:id", (req, res) => {
  res.send(users[req.params.id - 1]);
  // res.send(req.params.id);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "apple"]);
});

app.get("/fruits/mangoes", (req, res) => {
  res.send(["lengra", "rupali", "fazli", "gopalbhog"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yummy yummy fazli aam");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
