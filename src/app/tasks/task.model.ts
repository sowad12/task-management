export interface TaskModel {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;

}

export interface NewTaskModel {
    userId?: string;
    title: string;
    summary: string;
    dueDate: string;
}