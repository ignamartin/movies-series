import { create } from 'zustand'
import type { ModalState, Movie, Serie } from '~/models'

export const useModal = create<ModalState<Movie | Serie>>((set) => ({
  modalState: false,
  modalData: null,
  toggleState: () => set(state => ({ modalState: !state.modalState })),
  setModalData: (data) => set(state => ({ ...state, modalData: data.data })),
}))