import {completeIconSet} from '../dist/icons';

function buildIconCard(icon) {
    const iconCard = document.createElement('div');
    iconCard.classList.add('icon-card');
    iconCard.appendChild(buildSVGElement(icon));
    iconCard.appendChild(document.createTextNode(icon.name));
    return iconCard;
}

function buildSVGElement(icon) {
    const div = document.createElement('DIV');
    div.innerHTML = icon.data;
    return (
        div.querySelector('svg') ||
        this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
}

function buildIconList(iconSet) {
    const iconList = document.querySelector('.icon-list');
    iconList.innerHTML = '';
    iconSet.forEach(icon => iconList.appendChild(buildIconCard(icon)));
}

function buildTitle(iconSet) {
  const logo = iconSet.find(icon => icon.name === 'biit_logo');
  if (logo) {
    const iconLogo = document.querySelector('.biit_logo');
    if (iconLogo) {
      iconLogo.innerHTML = logo.data;
    }
  }
  const icon = iconSet.find(icon => icon.name === 'biit_icon');
  if (icon) {
    const iconLogo = document.querySelector('.biit_icon');
    if (iconLogo) {
      iconLogo.innerHTML = icon.data;
    }
  }
}

const searchField = document.querySelector('input');
searchField.addEventListener('keyup', function (event) {
    const newIconSet = completeIconSet.filter(icon => icon.name.includes(searchField.value));
    buildIconList(newIconSet);
});

buildTitle(completeIconSet);
buildIconList(completeIconSet);

