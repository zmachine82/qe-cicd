import { TaskList } from '../task-list';

describe("TaskList", () => {
    it("should add a task", () => {
        const taskList = new TaskList();
        taskList.addTask('task');
        expect(taskList.tasks).toEqual(['task']);
    });

    it("should remove a task", () => {
        const taskList = new TaskList();
        taskList.addTask('task');
        taskList.removeTask('task');
        expect(taskList.tasks).toEqual([]);
    });

})