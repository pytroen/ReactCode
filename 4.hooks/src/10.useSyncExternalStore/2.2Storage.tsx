import { useStorage } from "./2.1useStorge";
// import { useSto } from "./test";

const Storage: React.FC = () => {
    const [count, setCount] = useStorage<number>('count', 1);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};

export default Storage;