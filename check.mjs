import { exec } from 'child_process';
import fs from 'fs';

exec('npm run build', (error, stdout, stderr) => {
  fs.writeFileSync('build-log.txt', `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nERROR:\n${error}`);
});
