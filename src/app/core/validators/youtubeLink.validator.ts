import { FormControl, PatternValidator } from '@angular/forms';

export function validateYoutubelink(c: FormControl) {
  const link = c.value;
  if (link && link.indexOf('youtube') !== -1) {
    return null;
  }
  return {
    youtubeLink: link
  };
}
