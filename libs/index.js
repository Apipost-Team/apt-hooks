import { useRef, useMemo, useEffect, useState, useCallback } from 'react';

function useMemoizedFn(fn) {
    const fnRef = useRef(fn);
    fnRef.current = useMemo(() => fn, [fn]);
    const memoizedFn = useRef();
    if (!memoizedFn.current) {
        memoizedFn.current = function (...args) {
            return fnRef.current.apply(this, args);
        };
    }
    return memoizedFn.current;
}

const useUnmountedRef = () => {
    const unmountedRef = useRef(false);
    useEffect(() => {
        unmountedRef.current = false;
        return () => {
            unmountedRef.current = true;
        };
    }, []);
    return unmountedRef;
};

function useSafeState(initialState) {
    const unmountedRef = useUnmountedRef();
    const [state, setState] = useState(initialState);
    const setCurrentState = useCallback((currentState) => {
        /** if component is unmounted, stop update */
        if (unmountedRef.current)
            return;
        setState(currentState);
    }, []);
    return [state, setCurrentState];
}

export { useMemoizedFn, useSafeState, useUnmountedRef };
//# sourceMappingURL=index.js.map
