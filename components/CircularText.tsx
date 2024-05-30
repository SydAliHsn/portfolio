import React from 'react';


const CircularText = ({ fontSize, text, spacing, textClassNames }:
    { textClassNames?: string, fontSize: string, text: string, spacing?: number }): JSX.Element => {
    const textArr = text.split('');
    const total = textArr.length;
    const innerAngle = 360 / total;
    const radius = (spacing ?? 1) / Math.sin(innerAngle * Math.PI / 180); // hypotenuse

    return <div className='relative w-2 h-2 rounded-2xl mono'>
        {textArr.map((letter, index) =>
            <span
                key={index}
                className={`text-primary-light inline-block absolute font-bold ${textClassNames}`}
                style={{
                    fontSize,
                    transform: `translate(-50%, -50%)
                                rotate(${innerAngle * index}deg) 
                                translateY(-${radius}ch)`,
                    top: '50%',
                    left: '50%',
                }}>
                {letter.toUpperCase()}
            </span>)
        }
    </div >;
};

export default CircularText;