import Image from 'next/image'

interface iconType {
    iconName: string;
    width?: number;
    height?: number;
}

function IconImage({ iconName, width=50, height=50 }: iconType) {
    return (
        <Image
            src={`/assets/icon-${iconName}.svg`}
            alt='icon-title'
            width={width}
            height={height}
        />
    )
}

export default IconImage