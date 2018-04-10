import YoBasePrompts from 'yo-base-prompts';

export default async function prompting(yo) {
  const yoBasePrompts = new YoBasePrompts(yo);
  const destination = await yoBasePrompts.destinationPrompt();
  const { languages } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'languages',
      message: 'Languages:',
      default: ['javascript']
    }
  ]);
  yo.answers = { destination, languages };
  yo.context = { ...yo.context, ...yo.answers };
}
