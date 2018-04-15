import YoBasePrompts from 'yo-base-prompts';
import _ from 'lodash';

export default async function prompting(yo) {
  const yoBasePrompts = new YoBasePrompts(yo);
  const { destination } = await yoBasePrompts.prompt({
    name: true,
    destination: true
  });
  let { languages } = await yo.optionOrPrompt([
    {
      type: 'checkbox',
      name: 'languages',
      message: 'Languages:',
      choices: [
        { name: 'JavaScript', value: 'javascript' },
        { name: 'GoLang', value: 'golang' },
        { name: 'HTML/CSS', value: 'html-css' },
        { name: 'Make', value: 'make' },
        { name: 'Python', value: 'python' },
        { name: 'Ruby', value: 'ruby' }
      ],
      default: ['javascript']
    }
  ]);
  if (_.includes(languages, 'golang')) {
    languages.push('make');
    languages = _.uniq(languages);
  }
  if (_.includes(languages, 'python')) {
    languages.push('make');
    languages = _.uniq(languages);
  }
  if (_.includes(languages, 'html-css')) {
    languages.push('javascript');
    languages = _.uniq(languages);
  }
  yo.answers = { destination, languages };
  yo.context = { ...yo.context, ...yo.answers };
}
