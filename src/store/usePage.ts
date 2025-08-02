import { create } from 'zustand';
import { TypePageStore } from '../types/types';
import { LIST } from '../constants/constants';

export const usePageStore = create<TypePageStore>((set) => ({
    page: 1,
    data: LIST,
    list: LIST[1].list || [],
    setList: (list: any) => set(() => ({ list })),
    nextPage: (max) =>
        set((state) => ({
            page: state.page === max ? state.page : state.page + 1,
        })),
    prevPage: () =>
        set((state) => ({
            page: state.page === 1 ? state.page : state.page - 1,
        })),
    toPage: (page: number) => set(() => ({ page })),
}));