import { useFlag } from '@unleash/proxy-client-react';
interface BoxProps {
    color: 'red' | 'blue'
}
const Box = ({color}: BoxProps) => {
    return (
        <footer style={{backgroundColor: color, width: '100%', height: '100px', bottom: 0}} />
    )
}

export const Footer = () => {

    const enabled = useFlag('RedTheme');

    if (enabled) {
        return (
            <Box color={"red"}/>
        );
    }

    return (
        <Box color={"blue"}/>
    );
};
