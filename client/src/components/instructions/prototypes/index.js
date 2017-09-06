import ReactIntro from './react-intro';
import ReactComponents from './react-components';
import ReactComponentState from './react-component-state';
import ReactInputState from './react-input-forms';
import ReactStylesImages from './react-styles-images';

export const reactIntro = {
    component: ReactIntro,
    title: 'React Intro',
    subtitle: '001',
    text: 'An introduction to React that goes over setting up your first project and basic JSX',
    to: 'react-intro'
};

export const reactComponents = {
    component: ReactComponents,
    title: 'React Functional Components',
    subtitle: '002',
    text: 'An introduction to basic React functional components',
    to: 'react-components',
};

export const reactComponentState = {
    component: ReactComponentState,
    title: 'React Class Components with State',
    subtitle: '003',
    text: 'An introduction to class based components and component state',
    to: 'react-component-state',
};

export const reactInputsForms = {
    component: ReactInputState,
    title: 'React Handling Inputs / Forms',
    subtitle: '004',
    text: 'Utilizing component state to handle inputs / forms',
    to: 'react-inputs-forms',
    badge: ''
};

export const reactStylesImages = {
    component: ReactStylesImages,
    title: 'React Handling Styling and Images',
    subtitle: '005',
    text: 'Learn to add styles to your react app in multiple ways and import images',
    to: 'react-styles-images',
    badge: {
        color: 'yellow',
        opacity: .5,
        text: 'Coming Soon!'
    }
};
