const katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let place = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    let nextPerson = katzDeliLine.shift();
    return `Currently serving ${nextPerson}`;
  }
}