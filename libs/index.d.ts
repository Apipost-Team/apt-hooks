import { Dispatch, SetStateAction } from 'react';

type noop = (this: any, ...args: any[]) => any;
declare function useMemoizedFn<T extends noop>(fn: T): T;

declare function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
declare function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

declare const useUnmountedRef: () => any;

export { useMemoizedFn, useSafeState, useUnmountedRef };
