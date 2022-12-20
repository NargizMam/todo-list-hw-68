export interface Task{
    title: string,
    status: string
}
export interface ApiTask extends Task{
    id: string
}
export interface ApiTasksList {
    [id: string]: ApiTask
}