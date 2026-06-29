import {create} from 'zustand';
export const useZustandStore = create( (set)=> ({
    count: 0, // initial value
    increment: ()=>set((state)=> ({count: state.count + 1})),
    decrement: ()=>set((state)=> ({count: state.count - 1})),
    reset: ()=>set((state)=> ({count: 0})),
}))