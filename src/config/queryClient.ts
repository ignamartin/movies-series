import {
    QueryCache,
    QueryClient as TanstackQueryClient,
} from '@tanstack/react-query';
import { toast } from 'sonner';
import { ApiError } from '~/types/api-error';

export const queryClient = new TanstackQueryClient({
    queryCache: new QueryCache({
        onError(error, query) {
            if (typeof query.meta?.message === 'string') {
                return toast.error(query.meta.message);
            }

            if (error instanceof ApiError) {
                return toast.error(error.message);
            }
        },
    }),
    defaultOptions: {
        queries: {
            retry(failureCount, error) {
                return failureCount <= 3 && error instanceof ApiError;
            },
        },
    },
});