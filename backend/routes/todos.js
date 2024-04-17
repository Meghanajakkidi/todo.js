const express = require("express");

const router = express.Router();

const todos = []


router.get("/list",function(req,res){
    res.send(todos)
})


router.post("/create",function(req,res){
    console.log(req.body)
    todos.push(({taskdescription:req.body.taskdescription,taskname:req.body.taskname,sno:todos.length ? todos.length+1:1}))
    res.send("coming soon create todos")
})
router.delete("/delete/:taskname",function(req,res){
    console.log(req.params); //{id:2}
                                            
    let filteredTodos = todos.filter((item)=>{
        return item.taskname!==(req.params.taskname)
    })
    res.send(filteredTodos)

})

/*router.put("/update/:id",function(req,res){
    let index = todos.findIndex((item)=>{
        return item.id===Number(req.params.id)
    })
    if(index>-1){
        todos[index].status="completed"
    }
    res.send(todos)
})*/
module.exports = router