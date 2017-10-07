const katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeli.push(name);
  let place = katzDeli.indexOf(name) + 1;
  return katzDeli;
}
