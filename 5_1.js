function createHTMLFromObject(obj) {
    let htmlString = '<arlicle>';
  
    for (let key in obj) {
    str = '<div>' + '<h2>' + key + '</h2>' + '<span>' + obj[key] + '</span>' + '</div>';
    htmlString += str;
      }

    htmlString += '</article>';
    return htmlString;
    }
  
  const car = {
    name: 'Hendai Solaris',
      type: 'sedan',
      maxSpeed: '320',
      color: 'red',
  }

const html = createHTMLFromObject(car);
console.log(html);
document.body.innerHTML = html;
