/**
 * Koa compose
 */

export const compose = (middleware: Function[]) => {
    if (!Array.isArray(middleware)) throw new Error('Middleware stack must be an array!')
    for (const fn of middleware) {
        if (typeof fn !== 'function') throw new Error('Middleware must be composed of functions!')
    }

    return function (context: any, next: Function): Promise<any> {
        let index = -1

        return dispatch(0)
        function dispatch(i: number): Promise<any> {
            if(i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middleware[i]
            // TODO: 使用场景
            if(i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }

}