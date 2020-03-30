import React, {useState, useCallback} from 'react';
import './App.css';

function CountApp(){
    const [count, setCount] = useState(0);
    const plus = useCallback(()=> setCount(count+1),[count]);
    const minus = useCallback(()=> setCount(count-1),[count]);
    
     return (
        <div>
            <h1> ITSS カウンターアプリ</h1>
            <p> Diem so cua ban la {count}</p>
            <div>
                <button onClick={plus}>たす</button>
                <button onClick={minus}>引く</button>
            </div>
        </div>
            );

}
export default CountApp;