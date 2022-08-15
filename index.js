// Code your solution here

let driversArr= ['Bobby', 'sunny', 'Ally', 'Annette', 'Sam', 'Bobby'];

function findMatching(driversArr, string){
    return driversArr.filter ((filtered) => filtered.toLowerCase() === string.toLowerCase()
    );
};

console.log(findMatching(driversArr, 'Bobby'));

function fuzzyMatch(driversArr, string){
    return driversArr.filter ((m) => m.startsWith(string));
}

console.log(fuzzyMatch(driversArr, 'Mike'));

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
    ];

function matchName(drivers, string){
    return drivers.filter((x) => x.name === string);
}

console.log(matchName(drivers, 'Sally'));