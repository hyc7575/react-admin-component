import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import './InputRecommend.scss';

type Props = {
    options: Array<any>
    style?: CSSProperties
    onSelectOptionSet: (option: any) => void
    invalid?: boolean
    informationMessage?: string
}

// input과 InputRecommend를 InputWrapper로 감싸주세요.

const InputRecommend = ({ options, style, onSelectOptionSet, invalid, informationMessage }: Props) => {
    const [isShowList, setShowList] = useState<boolean>(true)
    const [marginTop, setMarginTop] = useState<string>('0');

    const selectListRef = useRef<HTMLUListElement>(null)
    const handleEventListener = (e: any) => {
        if (isShowList && (e.target !== selectListRef.current)) {
            setShowList(!isShowList)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleEventListener)
        return function cleanup() {
            document.removeEventListener('click', handleEventListener)
        }
    }, [isShowList]);

    // 더 좋은 방법이 있다면 추후 수정 예정
    useEffect(() => {
        if (invalid && informationMessage) setMarginTop('-28px');
        if (!invalid && informationMessage) setMarginTop('-14px');
    }, [invalid, informationMessage, setMarginTop])

    const onClickOption = (option: any) => {
        onSelectOptionSet!(option);
    }
    return (
        <>
            {isShowList && <ul
                ref={selectListRef}
                className="input-recommend"
                style={{...style, marginTop}}
            >
                {options.map(option => (
                    <li
                        key={option}
                        onClick={() => { onClickOption(option) }}
                    >
                        {option}
                    </li>
                ))}
            </ul>}
        </>
    )
}

export default InputRecommend