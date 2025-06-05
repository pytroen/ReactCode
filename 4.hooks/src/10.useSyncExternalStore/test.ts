import { useSyncExternalStore } from "react"

export const useSto = <T,>(key:string,initValue:T):[T,(value:T)=>void] =>{

    const subscribe = (callback:()=>void):()=>void=>{

        const handleStorageChange = (e:StorageEvent)=>{
            console.log(e);
            callback();
        }
        window.addEventListener('storage',handleStorageChange)
        return () =>window.removeEventListener('storage',handleStorageChange)
    }

    const call = ():T=>{
        const num = localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)!) :initValue;
        return num;
    }

    const update = (value:T) =>{
        localStorage.setItem(key,JSON.stringify(value));
        window.dispatchEvent(new Event('storage'));
    }

    const res = useSyncExternalStore(subscribe,call);

    return [res,update];
}