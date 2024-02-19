import { useEffect, useState } from "react";
import { DomEvent } from "../../constants/DomEvent.ts";

export default function HomeLogo() {

    const [offsetX, setOffsetX] = useState<number>(4);
    const [offsetY, setOffsetY] = useState<number>(4);

    const offsetBaseValue = 4;
    const amplitude = 10;

    useEffect(() => {
        const onMouseMove = (e: MouseEvent): void => {
            setOffsetX(offsetBaseValue + (amplitude * e.clientX / window.innerWidth - amplitude * 0.5));
            setOffsetY(offsetBaseValue + (amplitude * e.clientY / window.innerHeight - amplitude * 0.5));
        }

        window.addEventListener(DomEvent.MOUSE_MOVE, onMouseMove);

        return () => {
            window.removeEventListener(DomEvent.MOUSE_MOVE, onMouseMove);
        }
    }, []);

    return <svg viewBox="0 0 784 567" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_713_10)">
            <path d="M130.667 391.543V562.256C130.667 564.657 128.713 566.611 126.311 566.611H4.35565C1.95387 566.611 9.15527e-05 564.657 9.15527e-05 562.256V317.735C9.15527e-05 313.653 5.07742 311.836 7.7032 314.96C37.993 350.874 79.6943 376.858 127.22 387.299C129.223 387.735 130.667 389.502 130.667 391.555V391.543Z" fill="#FAFAFA" />
            <path d="M784 392.476C783.95 488.933 704.567 566.611 608.11 566.611H178.578C176.176 566.611 174.222 564.657 174.222 562.256V440.3C174.222 437.898 176.176 435.944 178.578 435.944H608.919C633.348 435.944 653.794 415.959 653.321 391.543C652.873 367.886 633.547 348.833 609.778 348.833H175.89C79.433 348.833 0.0498626 271.155 8.4839e-05 174.698C-0.0496929 78.4405 77.977 0.388916 174.222 0.388916H561.854C564.256 0.388916 566.21 2.34269 566.21 4.74447V126.688C566.21 129.089 564.268 131.043 561.867 131.043H174.222C150.453 131.043 131.127 150.096 130.679 173.765C130.206 198.181 150.665 218.167 175.081 218.167H609.778C706.023 218.167 784.05 296.218 784 392.476Z" fill="#FAFAFA" />
            <path d="M784 174.611C784 197.011 779.769 218.44 772.066 238.115C770.921 241.052 767.125 241.786 764.91 239.546C735.915 210.115 698.606 188.897 656.768 179.713C654.727 179.265 653.284 177.473 653.321 175.383C653.321 175.121 653.321 174.872 653.321 174.611C653.321 151.888 635.924 133.233 613.735 131.23C611.508 131.031 609.765 129.226 609.765 126.986V4.80668C609.765 2.34268 611.806 0.3889 614.27 0.451122C708.412 2.84046 783.988 79.8964 783.988 174.611H784Z" fill="#FAFAFA" />
        </g>
        <defs>
            <filter id="filter0_i_713_10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feBlend mode="normal" in="SourceGraphic" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={offsetY} dx={offsetX} />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_713_10" />
            </filter>
        </defs>
    </svg>
}
