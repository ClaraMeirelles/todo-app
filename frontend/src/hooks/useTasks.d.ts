import type { Task } from '../types/Task';
export declare function useTasks(): {
    tasks: Task[];
    loading: boolean;
    handleAddTask: (title: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    handleSearch: (query: string) => void;
    requestTasks: () => void;
    isFiltered: boolean;
    search: string;
};
