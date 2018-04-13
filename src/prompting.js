import YoBasePrompts from 'yo-base-prompts';

export default async function prompting(yo) {
  const yoBasePrompts = new YoBasePrompts(yo);
  const { destination } = await yoBasePrompts.prompt({
    name: true,
    destination: true
  });
  const { languages } = await yo.optionOrPrompt([
    {
      type: 'checkbox',
      name: 'languages',
      message: 'Languages:',
      choices: [
        {
          name: 'JavaScript',
          value: 'javascript'
        },
        {
          name: 'Make',
          value: 'make'
        },
        {
          name: 'Python',
          value: 'python'
        }
      ],
      default: ['javascript']
    }
  ]);
  yo.answers = { destination, languages };
  yo.context = { ...yo.context, ...yo.answers };
}
