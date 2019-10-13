const Express = require("express");
const app = Express();

const todosJson = [
    {
        id: 1,
        text: "アイウエオ"
    },
    {
        id: 2,
        text: "かきくけこ"
    },
    {
        id: 3,
        text: "さしすせそ"
    }
]

app.get("/todos", (req, res) => {
    res.json({
        todos: todosJson
    });
});

app.get("/todos/:id", (req, res) => {
    const todo = todosJson.find((todo) => {
        return todo.id === parseInt(req.params.id);
    });
    res.json({
        todo: todo
    });
});

app.listen(3000, () => {
    console.log("server listening on port 3000...");
});