import type { ErrorDTO } from './errorDTO';

export class ApiError extends Error implements ErrorDTO {
	public readonly code: string;

	private constructor(code: string, message: string) {
		super(message);
		this.code = code;
	}

	static throwError(error: ErrorDTO): never {
		throw new ApiError(error.code, error.message);
	}
}
