export function RGBA(color, opacity = 1){

    if(typeof color === 'object'){
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a ? color.a : opacity})`;
    }

    const rgba = {
        r: 0,
        g: 0,
        b: 0,
        a: opacity
    };
    
    switch(color){
        case 'blue':
        case 'primary':
            rgba.r = 2;
            rgba.g = 117;
            rgba.b = 216;
            break;
        case 'light-blue':
        case 'lightblue':
        case 'baby-blue':
        case 'babyblue':
        case 'info':
            rgba.r = 91;
            rgba.g = 192;
            rgba.b = 222;
            break;
        case 'green':
        case 'success':
            rgba.r = rgba.b = 92;
            rgba.g = 184;
            break;
        case 'yellow':
        case 'warning':
            rgba.r = 240;
            rgba.g = 173;
            rgba.b = 78;
            break;
        case 'red':
        case 'danger':
            rgba.r = 217;
            rgba.g = 83;
            rgba.b = 79;
            break;
        case 'gray':
        case 'secondary':
            rgba.r = rgba.g = rgba.b = 204;
            break;
        case 'white':
            rgba.r = rgba.g = rgba.b = 255;
            break;
    };

    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
}