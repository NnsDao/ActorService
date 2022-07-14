const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

async function main() {
  const pkg = JSON.parse(readFileSync(relativeToRootPath('package.json')));
  const curVersion = pkg.version;
  let onlineVersion = '';
  try {
    onlineVersion = (await $`npm view ${pkg.name} version`).stdout.replace('\n', '');
    const versionArr = onlineVersion.split('.');
    versionArr[1] = Number(versionArr[1]) + 1;
    pkg.version = versionArr.join('.');
  } catch (error) {
    console.error(error);
    onlineVersion = curVersion;
  }
  console.log(pkg.name, curVersion, onlineVersion);
  writeFileSync(relativeToRootPath('package.json'), JSON.stringify(pkg));
}
main();

function relativeToRootPath(url) {
  return path.resolve(process.cwd(), url);
}
