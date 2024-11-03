import { useEffect, useState } from 'react';
import Select from 'react-select';
import './select.css'

const options = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'react', label: 'React.js' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'express', label: 'Express.js' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'sql', label: 'SQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'firebase', label: 'Firebase' },
    { value: 'git', label: 'Git' },
    { value: 'github', label: 'GitHub' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'sass', label: 'Sass' },
    { value: 'tailwindcss', label: 'Tailwind CSS' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'jquery', label: 'jQuery' },
    { value: 'webpack', label: 'Webpack' },
    { value: 'babel', label: 'Babel' },
    { value: 'redux', label: 'Redux' },
    { value: 'graphql', label: 'GraphQL' },
    { value: 'restapi', label: 'REST API' },
    { value: 'materialui', label: 'Material-UI' },
    { value: 'chakraui', label: 'Chakra UI' },
    { value: 'jest', label: 'Jest' },
    { value: 'mocha', label: 'Mocha' },
    { value: 'cypress', label: 'Cypress' },
    { value: 'storybook', label: 'Storybook' },
    { value: 'pwa', label: 'Progressive Web Apps (PWA)' },
    { value: 'seo', label: 'SEO' },
    { value: 'webaccessibility', label: 'Web Accessibility' },
    { value: 'uxui', label: 'UI/UX Design' },
    { value: 'photoshop', label: 'Adobe Photoshop' },
    { value: 'figma', label: 'Figma' },
    { value: 'xd', label: 'Adobe XD' },
];



const SelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [newselectedOption, setNewSelectedOption] = useState([]);
    console.log(newselectedOption)
    useEffect(()=>{

      const valueData =   selectedOption.map(select =>  select.value)
      setNewSelectedOption(valueData)
    },[selectedOption])
    

    return (
        <div className="mx-auto flex justify-center pt-20 max-w-4xl">
            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
            />
        </div>
    );
}

export default SelectComponent;
