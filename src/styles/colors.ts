import { Appearance } from 'react-native-appearance';

interface Colors {
    colors: {
        green: string;
        green_dark: string;
        green_light: string;

        heading: string;
        body_dark: string;
        body_light: string;

        background: string;
        shape: string;
        white: string;
        gray: string;

        blue: string;
        blue_light: string;

        red: string;
    };
}
const colorScheme = Appearance.getColorScheme();

function ColorTheme(): Colors {
    if (colorScheme === 'light') {
        return {
            colors: {
                green: '#32B768',
                green_dark: '#2B7A4B',
                green_light: '#DAF2E4',

                heading: '#52665A',
                body_dark: '#738078',
                body_light: '#AAB2AD',

                background: '#FFFFFF',
                shape: '#F0F0F0',
                white: '#FFFFFF',
                gray: '#CFCFCF',

                blue: '#3D7199',
                blue_light: '#EBF6FF',

                red: '#E83F5B',
            },
        };
    }

    if (colorScheme === 'dark') {
        return {
            colors: {
                green: '#32B768',
                green_dark: '#2B7A4B',
                green_light: '#DAF2E4',

                heading: '#F7FBF8',
                body_dark: '#D3D9D6',
                body_light: '#919C96',

                background: '#202022',
                shape: '#2B2B2C',
                white: '#202022',
                gray: '#CFCFCF',

                blue: '#D6EDFF',
                blue_light: '#303A41',

                red: '#E83F5B',
            },
        };
    }

    return {
        colors: {
            green: '#32B768',
            green_dark: '#2B7A4B',
            green_light: '#DAF2E4',

            heading: '#52665A',
            body_dark: '#738078',
            body_light: '#AAB2AD',

            background: '#FFFFFF',
            shape: '#F0F0F0',
            white: '#FFFFFF',
            gray: '#CFCFCF',

            blue: '#3D7199',
            blue_light: '#EBF6FF',

            red: '#E83F5B',
        },
    };
}

export default ColorTheme;
