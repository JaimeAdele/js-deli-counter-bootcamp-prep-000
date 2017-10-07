const katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let place = katzDeli.indexOf(name);
  return `Welcome, ${name}. You are number ${place} in line.`;
}
