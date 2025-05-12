const num = 7;

switch (num) {
    case 0:
        str_num = 'Zero';
        break;
    case 1:
        str_num = 'One';
        break;
    case 2:
        str_num = 'Two';
        break;
    case 3:
        str_num = 'Three';
        break;
    case 4:
        str_num = 'Four';
        break;
    case 5:
        str_num = 'Five';
        break;
    default:
        str_num = 'no greater than 5';
}
console.log(str_num);

const date = new Date();

// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getDate());

switch (new Date().getDay()) {
    case 0:
        day = 'Monday';
        break;
    case 1:
        day = 'Tuesday';
        break;
    case 2:
        day = 'Wednesday';
        break;
    case 3:
        day = 'Thursday';
        break;
    case 4:
        day = 'Friday';
        break;
    case 5:
        day = 'Saturday';
        break;
    case 6:
        day = 'Sunday';
        break;
    case 7:
        day = 'Sunday';
        break;
}
console.log(day);