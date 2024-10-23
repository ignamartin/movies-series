import type { ModalProps, Movie, Serie } from "~/models"

export interface ModalState<T extends Movie | Serie> {
    modalState: boolean
    modalData: T | null
    modalDataType: "movie" | "serie"
    toggleModalState: () => void
    setModalData: (data: ModalProps<T>) => void
    setModalDataType: (type: "movie" | "serie") => void
}