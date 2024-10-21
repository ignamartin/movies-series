import type { Movie, Serie } from "~/models";

export interface ModalProps<T extends Movie | Serie> {
    data: T;
}