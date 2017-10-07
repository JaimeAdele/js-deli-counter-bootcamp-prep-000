const katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let place = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`;
}
