import './MyLabel.css'

interface Props {
    /**
     *  Text to display 
    */
    label: string;
    /**
     *  Label Size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  Capitalize all letters
    */
    allCaps?: boolean;
    /**
     *  Label Color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     *  Label Font Color
    */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor
}: Props) => {
    return (
        <span
            className={`${size} ${color} label`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span >
    )
}
