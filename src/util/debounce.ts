
/**
 * 防抖函数
 * 1.函数延迟指定时间执行
 * 2.指定时间内再次调用函数时，清除上次函数，开启新的定时器执行
 * @param fn 
 * @param ms 
 */
export const debounce = (fn: Function, ms: number): Function => {
    let timer: NodeJS.Timeout
    const debounceFn = () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
        }, ms)
    }
    return debounceFn

}