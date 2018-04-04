export default async function writing(yo) {
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_editorconfig'),
    yo.destinationPath('.editorconfig'),
    yo.context
  );
}
