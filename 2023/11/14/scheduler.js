class Scheduler {
    tasks = []
    currentTasks = []
    limitNumber = 2
    addTaskLooper = false
    deleteTaskLooper = false
    
    addTaskLoop(){
            this.addTaskLooper = true
            setTimeout(() => {
                if (this.tasks.length > 0){
                    if (this.currentTasks.length < this.limitNumber){
                        const Task = this.tasks.shift()
                        this.currentTasks.push(Task)
                        if (!this.deleteTaskLooper) this.deleteTaskLoop()
                        Task.task().then(() => {
                            Task.resolved = true
                            Task.resolve()
                        })
                    }
                    this.addTaskLoop()
                }else {
                    this.addTaskLooper = false
                }
            })
    }
    
    deleteTaskLoop(){
            this.deleteTaskLooper = true
            setTimeout(() => {
                if (this.currentTasks.length > 0){
                    this.currentTasks = this.currentTasks.filter((item) => {
                        return !item.resolved
                    })
                    this.deleteTaskLoop()
                }else {
                    this.deleteTaskLooper = false
                }
            })
    }
    
    add(task) {
        const Task = {
            task,
            resolved: false,
            resolve: undefined
        }
       
        const result = new Promise(resolve => {
             Task.resolve  = resolve
        })
        this.tasks.push(Task)
        if (!this.addTaskLooper) this.addTaskLoop()
        return result
    }
}

const schduler = new Scheduler()

const TimeOut = (time) => {
    return new Promise(r => setTimeout(r,time))
}

const addTask = (time,order) => {
    schduler.add(() => TimeOut(time)).then(() => console.log(order))
}

addTask(1000,1)
addTask(500,2)
addTask(300,3)
addTask(400,4)


