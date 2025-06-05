import { useSyncExternalStore } from "react"

// 自定会hooks
export const useStorage = <T,>(key: string, initialValue: T):[T,(value:T)=>void] => {
    const subscribe = (callback: () => void):() =>void =>{
        // 订阅 
        // 监听 localStorage 的变化
        // 注意：localStorage 的变化不会触发 React 的更新，所以需要手动触发
        const handleStorageChange = (e:StorageEvent) => {
            console.log('触发了',e);
            callback();
        };
        // 监听 storage 事件
        // 注意：storage 事件只在其他窗口或标签页中触发
        // 当前窗口或标签页不会触发
        // 但可以通过 window.addEventListener('storage', callback) 来监听
        // 这样可以在当前窗口或标签页中手动触发更新
        window.addEventListener('storage', handleStorageChange);

        // 返回取消订阅的函数
        // 注意：如果不返回取消订阅的函数，可能会导致内存泄漏
        // 例如：如果组件卸载了，但仍然在监听 storage 事件，就会导致内存泄漏
        // 取消订阅时，移除监听器
        return () => window.removeEventListener('storage', handleStorageChange);
    }
    const getSnapshot = ():T =>{
        const result = localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)!):initialValue
        return result;
    }

    const res = useSyncExternalStore(subscribe,getSnapshot);


    const updateStorage =(value:T) =>{
        localStorage.setItem(key,JSON.stringify(value));
        // 手动触发 storage 事件
        window.dispatchEvent(new StorageEvent('storage'))
    }

    return [res,updateStorage];

}

