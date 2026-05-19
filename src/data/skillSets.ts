import {SkillSet} from '../models/SkillSet';

const year = new Date().getFullYear();

export const skillSets: SkillSet[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        title: 'JavaScript/TypeScript',
        expYears: year - 2007,
        widthPercents: 100,
        color: '#4271BA',
      },
      {
        title: 'PHP',
        expYears: 8,
        widthPercents: 60,
        color: '#4E588B',
      },
      {
        title: 'Java',
        widthPercents: 30,
        color: '#D23830',
      },
      {
        title: 'Swift',
        color: '#DE5C41',
        widthPercents: 25,
      },
    ],
    asList: true,
  },
  {
    title: 'Frameworks',
    items: [
      {
        title: 'React',
        color: '#7ECFEF',
      },
      {
        title: 'Angular',
        color: '#d23c36',
      },
      {
        title: 'Next.js',
        color: '#324048',
      },
      {
        title: 'Ionic 4',
        color: '#497AEF',
      },
      {
        title: 'Node.js',
        color: '#96BE52',
      },
      {
        title: 'Titanium SDK',
        color: '#7D90A7',
      },
      {
        title: 'Firebase',
        color: '#E9A63E',
      },
      {
        title: 'Zend Framework',
        color: '#77AD34',
      },
    ],
    asList: false,
  },
  {
    title: 'Tools & Libs',
    items: [
      {
        title: 'Git',
        color: '#324048',
      },
      {
        title: 'Claude',
        color: '#d57355',
      },
      {
        title: 'Copilot',
        color: '#5bb6d8',
      },
      {
        title: 'Webpack',
        color: '#3872B4',
      },
      {
        title: 'NPM',
        color: '#B52619',
      },
      {
        title: 'node',
        color: '#96BE52',
      },
      {
        title: 'AWS',
        color: '#E08D36',
      },
      {
        title: 'AWS CLI',
        color: '#324048',
      },
      {
        title: 'Gulp',
        color: '#B94D4A',
      },
      {
        title: 'GraphQL',
        color: '#CC44A2',
      },
      {
        title: 'Jest/Jasmine',
        color: '#B14425',
      },
      {
        title: 'Playwright',
        color: '#28a732',
      },
      {
        title: 'nginx',
        color: '#d23c36',
      },
      {
        title: 'Docker',
        color: '#4990DF',
      },
      {
        title: 'SASS/SCSS',
        color: '#BA6993',
      },
    ],
    asList: false,
  },
  {
    title: 'Databases',
    items: [
      {
        title: 'MySQL',
        color: '#5B7D99',
      },
      {
        title: 'SQLite',
        color: '#E9A43F',
      },
      {
        title: 'MongoDB',
        color: '#4da53f',
      },
      {
        title: 'Firebase (NoSQL)',
        color: '#E9A63E',
      },
    ],
    asList: false,
  },
  {
    title: 'Other',
    items: [
      {
        title: 'HTML5',
        color: '#CB5434',
      },
      {
        title: 'CSS3',
        color: '#346DAF',
      },
      {
        title: 'OOP/OOAD',
      },
      {
        title: 'CI/CD',
      },
      {
        title: 'Agile',
      },
      {
        title: 'JIRA',
        color: '#417EEF',
      },
      {
        title: 'XP',
      },
      {
        title: 'Unix',
        color: '#324048',
      },
      {
        title: 'Bash',
        color: '#2A2E35',
      },
      {
        title: 'TDD/BDD',
      },
      {
        title: 'Unit/E2E testing',
      },
      {
        title: 'Facebook API',
        color: '#3771E3',
      },
    ],
    asList: false,
  },
];
