import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(drivers: any[], searchText: string) {
    return drivers.filter(driver => removeAccents(driver.fullName.toLowerCase()).includes(searchText.toLowerCase()));
  }
}

function removeAccents(string) {
  const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  string = string.split('');
  string.forEach((letter, index) => {
    const i = accents.indexOf(letter);
    if (i !== -1) {
      string[index] = accentsOut[i];
    }
  });
  return string.join('');
}
