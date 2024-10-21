import type { ModalProps, Movie, Serie } from "~/models"

export interface ModalState<T extends Movie | Serie> {
    modalState: boolean
    modalData: T | null
    toggleState: () => void
    setModalData: (data: ModalProps<T>) => void
}